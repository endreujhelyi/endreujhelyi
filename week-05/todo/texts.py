# Basic dictionary for todo.py

# INTRO STRING
intro = '\nPython Todo application\n=======================\n\nCommand line arguments:\n-l   Lists all the tasks\n-a   Adds a new task\n-r   Removes an task\n-c   Completes an task\n\n'


# ========================================
# ADD TASK
add = {
    'no_task': '\nUnable to add: No task is provided\n'
}

# ARGUMENT ERROR
arg = {
    'unsupported': '\nUnsupported argument\n'
}

# EMPTY LIST
empty = {
    'no_todo': '\nNo todos for today!\n'
}

# TASK
remove = {
    'no_index': '\nUnable to remove: No index is provided\n',
    'out_of_bound': '\nUnable to remove: Index is out of bound\n',
    'not_number': '\nUnable to remove: Index is not a number\n'
}
