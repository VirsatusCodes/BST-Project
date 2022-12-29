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

<!-- Notes upon reading peer solution -->

-Set() object lets you store only unique values of any type. (for easier removal of duplicates)

-I just realized i massively overcomplicated my insert value func and artificially placed limitations upon it it was as simple as recursively going through the tree until i found a null value where the value SHOULD be placed and then placing it there, the good part is when i was making my isBalance() i remembered that that was with some tweeking the algorithm i needed.

-peer solution to height() is to keep going left and right recursively getting all the lengths along the way and then returning the highest lengths using Math.max() which solved my issue of height not working on unbalanced trees

-with height() working properly they used it in isBalanced() as a more efficient method, as i thought it would be as well.

-those were the differences that mattered i think, nothing was mind boggling and i think i would have been able to solve it properly without issue with more time however i did learn a few new javascript built in functions which was quite nice and they did a class version which was niec too look over. Overall i learned alot in this project and about how to handle data in general was glad to do it!

I looked at 
*https://github.com/lnicepei/binary-search-tree/blob/main/binary-search-tree.js