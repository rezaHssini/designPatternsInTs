class MyNode {
  children: MyNode[];
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  add(child: MyNode): void {
    this.children.push(child);
  }

  remove(child: MyNode) {
    var length = this.children.length;
    for (var i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  }

  getChild(i: number): MyNode {
    return this.children[i];
  }

  hasChildren(): boolean {
    return this.children.length > 0;
  }
}

function traverse(indent: number, node: MyNode) {
  console.log(Array(indent++).join("--") + node.name);

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i));
  }
}

class Application {
  main(): void {
    const tree = new MyNode("root");
    const left = new MyNode("left");
    const right = new MyNode("right");
    const leftleft = new MyNode("leftleft");
    const leftright = new MyNode("leftright");
    const rightleft = new MyNode("rightleft");
    const rightright = new MyNode("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    traverse(1, tree);
  }
}
