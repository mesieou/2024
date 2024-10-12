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
console.log(`Created empty tree${myFirstTree}`);
console.log(`Added 8: ${myFirstTree.add(8)}`);