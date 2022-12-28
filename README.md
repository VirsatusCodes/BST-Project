# BST-Project
TOP Binary search Treees https://www.theodinproject.com/lessons/javascript-binary-search-trees

many of these functions are fragile, not looking
to make it work for all use cases atm (esp when tree is
unbalanced due to insertion or deletion)

many issues can be fixed with autommatic balancing of tree when it becomes 
unbalanced though.

notes before reading through others solutions

-Need to test at intervals if tree is unbalanced and if so auto rebalance
-height func does not work on unbalanced trees, neither do insert and remove if it gets
bad enough
-isBalanced takes a lot of time on large trees if height were modified to work
unbalanced trees i could use that instead of scanning the depth of every node in the tree.
-I would like to make remove a more efficient program i would need a good way to get several points in the tree such as"before target, target, post target" and other manipulation targets with reliablity possibly by using more array printing manipulation
such as inOrder and the find function, but as this changes based on left or right side and
other variables it is a bit tricky for the current me.

Many things could be changed that i could spend a lot of time tinkering with as im pretty inexperienced to the various possibilities and efficiencies but i think i have sunk enough time into experimenting and trying things and am ready to look at peer solutions, compare them, and then make notes of them followed by moving on.