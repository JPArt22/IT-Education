
const imageContainer = document.getElementById('imagecont');
const primeroInput = document.getElementById('primero');
const segundoInput = document.getElementById('segundo');
const boton = document.getElementById('boton');
const text = document.getElementById('text');

const cy = cytoscape({
    container: document.getElementById("cy"),
    userZoomingEnabled: false, // Disable zooming on scroll
    elements: [], 
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'blue', 
          'label': 'data(id)'
        }
      },
      {
        selector: 'edge',
        style: {
          'line-color': 'pink', 
        }
      }
    ],
    layout: {
      name: 'cose'
    }
  });


const node = {
    group: 'nodes',
    data: {
        id: 1,
        label: 'Vertex 1',
        className: 'node',
        backgroundImage: 'https://okdiario.com/img/2022/11/22/libros-4.jpg'
    }
};    
const node2 = {
    group: 'nodes',
    data: {
        id: 2,
        label: 'Vertex 2',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node3 = {
    group: 'nodes',
    data: {
        id: 3,
        label: 'Vertex 3',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node4 = {
    group: 'nodes',
    data: {
        id: 4,
        label: 'Vertex 4',
        className: 'node',
        backgroundImage: 'https://www.petdarling.com/wp-content/uploads/2020/11/razas-de-perros-200x200.jpg'
  }
};

const node5 = {
    group: 'nodes',
    data: {
        id: 5,
        label: 'Vertex 5',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node6 = {
    group: 'nodes',
    data: {
        id: 6,
        label: 'Vertex 6',
        className: 'node',
        backgroundImage: 'https://images.hola.com/imagenes/estar-bien/20181009131055/libros-de-salud/0-607-970/Libros-Salud-2-m.jpg?tx=w_680  '
  }
};

const edge = {
    group: 'edges',
    data: {
      id: 'edge1',
      source: '1',
      target: '2',
      className: 'edge'
    }
};

const edge1 = {
    group: 'edges',
    data: {
      id: 'edge2',
      source: '1',
      target: '3',
      className: 'edge'
    }
};

const edge2 = {
  group: 'edges',
  data: {
    id: 'edge3',
    source: '3',
    target: '4',
    className: 'edge'
  }
};

const edge3 = {
  group: 'edges',
  data: {
    id: 'edge4',
    source: '3',
    target: '5',
    className: 'edge'
  }
};

const edge4 = {
  group: 'edges',
  data: {
    id: 'edge5',
    source: '5',
    target: '6',
    className: 'edge'
  }
};


// Register click event handler for nodes
cy.on('click', 'node', (event) => {
  const node = event.target;
  const nodeData = node.data();

  // Update the imageContainer with the image URL
  imageContainer.style.backgroundImage = `url(${nodeData.backgroundImage})`;
  
  // Show the imageContainer
  imageContainer.style.display = 'block';
  
});


cy.on('click', (event) => {
  const target = event.target;
  
  // Check if the clicked element is not a node
  if (target === cy || target.isEdge()) {
    // Hide the imageContainer
    imageContainer.style.display = 'none';
  }
});

boton.addEventListener('click', () => {
  const startNodeId = primeroInput.value;
  const endNodeId = segundoInput.value;
  
  if (startNodeId && endNodeId) {
    const shortestPath = findShortestPath(startNodeId, endNodeId);
    text.textContent = `Shortest Path: ${shortestPath.join(' -> ')}`;
  } else {
    text.textContent = 'Please enter valid node IDs.';
  }
});


const findShortestPath = (startNodeId, endNodeId) => {
  const startNode = cy.getElementById(startNodeId);
  const endNode = cy.getElementById(endNodeId);

  const dijkstra = cy.elements().dijkstra(startNode, (edge) => {
    return edge.data('weight') || 1;
  });

  const pathToNode = dijkstra.pathTo(endNode);
  const pathNodeIds = pathToNode.nodes().map((node) => node.id());

  return pathNodeIds;

};

cy.add([node, node2, node3, node4, node5, node6, edge, edge1, edge2, edge3, edge4]);

cy.layout({name: "cose"}).run();