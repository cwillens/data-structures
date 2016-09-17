describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should not insert duplicate objects', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(2);
    expect(binarySearchTree.left.left).to.equal(undefined);
    expect(binarySearchTree.right).to.equal(undefined);
    expect(binarySearchTree.left.right).to.equal(undefined);
    expect(binarySearchTree.left.value).to.equal(2);
  });
  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });


  it('should rebalance when max depth is greater than twice min depth', function() {
    debugger;
    
    var binarySearchTree = BinarySearchTree(5, true);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    console.log('good is ', binarySearchTree);
    binarySearchTree2 = BinarySearchTree(5);
    binarySearchTree2.right = BinarySearchTree(6);
    binarySearchTree2.right.right = BinarySearchTree(7);
    console.log(binarySearchTree2);


    expect(binarySearchTree).to.not.eql(binarySearchTree2);
  });

});
