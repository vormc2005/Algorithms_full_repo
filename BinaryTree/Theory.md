DFS

function dfs(node, state):
    if node is null:
        ...
        return

    left = dfs(node.left, state)
    right = dfs(node.right, state)

        ...

    return ...

Find max value in the tree
    function dfs(node):
  if node is null:
    return MIN_VALUE

  left_max_val = dfs(node.left)
  right_max_val = dfs(node.right)
  return max(node.val, left_max_val, right_max_val)


...
# global variable to record current max value
# initialize to minimum value possible so any node will be larger
max_val = MIN_VALUE

function dfs(node):
  if node is null:
    return

  if node.val > max_val: # update the global variable if current value is larger
    max_val = node.val

  # recurse
  dfs(node.left)
  dfs(node.right)

function get_max_val(root)
  dfs(root) # kick off dfs from root node
  return max_val