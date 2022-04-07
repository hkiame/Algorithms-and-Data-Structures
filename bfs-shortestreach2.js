// https://www.hackerrank.com/challenges/dijkstrashortreach/problem

function shortestReach(n, edges, s){
    const result = [];
    const graph = new Map();

    for(let i = 1; i <= n; ++i){
        graph.set(i, new Map());
    }

    for(const [nodeA, nodeB, weight] of edges){
        if(graph.get(nodeA).has(nodeB)){
            if(graph.get(nodeA).get(nodeB) > weight){
                graph.get(nodeA).set(nodeB, weight);
                graph.get(nodeB).set(nodeA, weight);
            }
        }else{
            graph.get(nodeA).set(nodeB, weight);
            graph.get(nodeB).set(nodeA, weight);
        }
    }

    const distances = new Map(),
        parents = new Map(),
        visited = new Set(),
        queue = [[s, 0]];

    for(const [vertex, connections] of graph){
        if(vertex === s){
            distances.set(s, 0);
        }else{
            distances.set(vertex, Number.POSITIVE_INFINITY);
        }

        parents.set(vertex, null);
    }

    while(queue.length !== 0){
        const [curVertex, curDistance] = queue.shift();
        const neighbors = graph.get(curVertex);

        for(const [neighbor, distance] of neighbors){
            if(visited.has(neighbor)){
                continue;
            }

            const newDistance = curDistance + distance;

            if(distances.get(neighbor) > newDistance){
                distances.set(neighbor, newDistance);
                parents.set(neighbor, curVertex);
            }
        }

        visited.add(curVertex);

        let minDistance = Number.POSITIVE_INFINITY,
            minVertex = null;

        for(let [vertex, distance] of distances){
            if(minDistance > distance && !visited.has(vertex)){
                minDistance = distance;
                minVertex = vertex;
            }
        }

        if(minVertex !== null){
            queue.push([minVertex, minDistance]);
        }
    }


    for(let [vertex, distance] of distances){
        if(vertex === s){
            continue;
        }

        if(distance === Number.POSITIVE_INFINITY){
            result.push(-1);
        }else{
            result.push(distance);
        }
    }

    return result;
}

const edges1 = [[1, 2, 24], [1, 4, 20], [3, 1, 3], [4, 3, 12]];
console.log(shortestReach(4, edges1, 1));