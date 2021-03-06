describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });
  
  it('Expect children value to be an array', function() {
    expect(tree.children).to.be.a('array');
    tree.addChild(5);
    expect(tree.children).to.be.a('array');
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(6);
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly create the parent value', function() {
    tree.addChild(4);
    tree.children[0].addChild(3);
    expect(tree.children[0].parent).to.eql(tree);
    expect(tree.children[0].children[0].parent).to.eql(tree.children[0]);
  });

  it('should be able to remove child from parent', function() {
    tree.addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].removeFromParent();
    expect(tree.children).to.eql([]);
  });
  it('should remove child\'s parent attribute', function() {
    tree.addChild(4);
    tree.children[0].addChild(3);
    var detached = tree.children[0].removeFromParent();
    expect(detached.parent).to.eql(null);
  });

  it('should apply a callback to all items in the tree', function() {
    tree.addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].addChild(2);
    tree.children[0].addChild(1);
    tree.children[0].children[0].addChild(0);
    tree.addChild(6);
    tree.children[1].addChild(7);
    
    var result = [];
    var callBack = function(node) {
      result.push(node.value);
    };
    tree.traverse(callBack);
    expect(result).to.eql([ undefined, 4, 3, 0, 2, 1, 6, 7 ]);
  });
});
