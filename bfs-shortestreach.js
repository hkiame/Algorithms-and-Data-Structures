// https://www.hackerrank.com/challenges/bfsshortreach/problem

function bfs(n, m, edges, s){

    const graph = new Map();

    for(let i = 1; i <= n; ++i){
        graph.set(i, new Set());
    }

    for(let [nodeA, nodeB] of edges){
        if(graph.has(nodeA)){
            graph.get(nodeA).add(nodeB);
        }

        if(graph.has(nodeB)){
            graph.get(nodeB).add(nodeA);
        }
    }

    const WEIGHT = 6;
    const queue = [s];
    const distances = (new Array(n + 1)).fill(-1);
    distances[s] = 0;

    while(queue.length > 0){
        const vertex = queue.shift();

        for(let neighbor of graph.get(vertex)){
            if(distances[neighbor] === -1){
                const newDistance = distances[vertex] + WEIGHT;
                distances[neighbor] = newDistance;
                queue.push(neighbor);
            }
        }
    }

    distances.splice(s, 1);
    distances.shift();

    return distances;
}

console.log(bfs(5, 3, [[1, 2], [1, 3], [3, 4]], 1));