// TreeNode Class:
// Create a class called TreeNode. This will represent a node in the tree. 
// It will have a value property and a left and right property that will point 
// to the left and right child nodes respectively. They will be initialized 
// to null when the node is created.

// Examples:
// let a, b, c, d, e, f;

//     a = new TreeNode('a');
//     b = new TreeNode('b');
//     c = new TreeNode('c');
//     d = new TreeNode('d');
//     e = new TreeNode('e');
//     f = new TreeNode('f');

//     a.left = b;
//     a.right = c;
//     b.left = d;
//     b.right = e;
//     c.right = f;

//     expect(a.left).toBe(b);
//     expect(a.right).toBe(c);
//     expect(b.left).toBe(d);
//     expect(b.right).toBe(e);
//     expect(c.right).toBe(f);

//     expect(a.value).toBe('a');
//     expect(b.value).toBe('b');
//     expect(c.value).toBe('c');
//     expect(d.value).toBe('d');
//     expect(e.value).toBe('e');
//     expect(f.value).toBe('f');

// Hints:
// 1. The constructor will take a value parameter.
// 2. Initialize the left and right properties to null in the constructor.
// 3. Create an instance for each node in the tree and assign the appropriate 
//    values to the left and right properties.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = TreeNode;
