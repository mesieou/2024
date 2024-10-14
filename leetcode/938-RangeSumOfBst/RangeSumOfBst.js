class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

class BSF {
    constructor() {
        this.root = null;
    }
    
    add(data){
        const node = this.root;
        // if the tree is empty
        if (node == null) {
            this.root = new Node(data);
            return;
    
        //if the tree is not empty    
        } else{
            // create a recursion function that runs while there are more nodes down the trww
            const searchTree = node => {
                // if the data is lower than node
                if (data < node.val) {
                    if (node.left == null) {
                        node.left = new Node(data);
                        return;
                    } else if(node.left != null) {
                        return searchTree(node.left)
                    }

                // if the data is higher than node    
                } else if(data > node.val){
                    if (node.right == null) {
                        node.right = new Node(data);
                        return;
                    } else if(node.right != null) {
                        return searchTree(node.right);
                    }
                } else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }
}

const myFirstTree = new BSF();
myFirstTree.add(8)
myFirstTree.add(4)
myFirstTree.add(10)
myFirstTree.add(25)
myFirstTree.add(2)


// create a function to sum numbers within the range
const sumWithinRange = (tree, low, high) => {
    // if the tree is empty
    if (!tree) {
        return 0;
    }

    let sum = 0;
    // main case to add up values within range
    if (low <= tree.val && tree.val <= high) {
        sum += tree.val        
    }
    // recursive calls to traverse through the tree
    if (tree.left) {
        sum += sumWithinRange(tree.left, low, high);
    }

    if (tree.right) {
        sum += sumWithinRange(tree.right, low, high);
    }

    return sum
}

const sum = sumWithinRange(myFirstTree.root, 3,8); 
console.log(sum)