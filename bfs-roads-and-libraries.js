function roadsAndLibraries(n, c_lib, c_road, cities){
    if(c_lib <= c_road){
        return n * c_lib;
    }

    const graph = new Map();
    let total = 0;

    for(let i = 1; i <= n; ++i){
        graph.set(i, new Set());
    }

    for(let [nodeA, nodeB] of cities){
        if(graph.has(nodeA)){
            graph.get(nodeA).add(nodeB);
        }

        if(graph.has(nodeB)){
            graph.get(nodeB).add(nodeA);
        }        
    }

    const queue = [];
    const visited = new Set();
    const groups = [];

    for(let i = 1; i <= n; ++i){
        if(visited.has(i)){
            continue;
        }

        visited.add(i);
        queue.push(i);
        
        groups.push(new Set().add(i));

        while(queue.length !== 0){
            const curNode = queue.shift();
    
            for(let neighbor of graph.get(curNode)){
                if(visited.has(neighbor)){
                    continue;
                }
    
                let group = groups[groups.length - 1];
                group.add(neighbor);
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

    for(const group of groups){
        total += c_lib;
        total += (group.size - 1) * c_road;
    }

    return total;
}

console.log(roadsAndLibraries(3, 2, 1, [[1, 2], [3, 1], [2, 3]]));
console.log(roadsAndLibraries(8, 3, 2, [[1, 7], [1, 3], [1, 2], [2, 3], [5, 6], [6,8]]));