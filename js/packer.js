/******************************************************************************

Это очень простой алгоритм упаковки бина на основе двоичного дерева, который инициализируется 
с фиксированной шириной и высотой и поместит каждый блок в первый узел, где 
он подходит, а затем разделит этот узел на 2 части (вниз и вправо), чтобы отследить 
оставшиеся пробелы. 

Наилучшие результаты достигаются, когда входные блоки сортируются по высоте, или даже лучше, 
когда сортируются по max (ширина, высота). 

Входные данные: 
------ 

  w: ширина целевого прямоугольника 
  h: высота 
  блоков целевого прямоугольника : массив любых объектов, имеющих атрибуты .w и .h 

Выход:
-------

  marks each block that fits with a .fit attribute pointing to a
  node with .x and .y coordinates

Example:
-------

  var blocks = [
    { w: 80, h: 60 },
    { w: 100, h: 82 },
    { w:  208, h:  82 },

  ];

  var packer = new Packer(82, 383);
  packer.fit(blocks);

  for(var n = 0 ; n < blocks.length ; n++) {
    var block = blocks[n];
    if (block.fit) {
      Draw(block.fit.x, block.fit.y, block.w, block.h);
    }
  }


******************************************************************************/

Packer = function(w, h) {
  this.init(w, h);
};

Packer.prototype = {

  init: function(w, h) {
    this.root = { x: 0, y: 0, w: 82, h: 383 };
  },

  fit: function(blocks) {
    var n, node, block;
    for (n = 0; n < blocks.length; n++) {
      block = blocks[n];
      if (node = this.findNode(this.root, block.w, block.h))
        block.fit = this.splitNode(node, block.w, block.h);
    }
  },

  findNode: function(root, w, h) {
    if (root.used)
      return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
    else if ((w <= root.w) && (h <= root.h))
      return root;
    else
      return null;
  },

  splitNode: function(node, w, h) {
    node.used = true;
    node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
    node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
    return node;
  }

}

