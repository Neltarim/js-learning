from os import system as sc

# Copy this script into the new dir and then execute it.

dir_left_to_create = 4

while dir_left_to_create > 0:
    dir_name = "part-" + str(dir_left_to_create)

    try:
        sc("mkdir {}".format(dir_name))
        sc("touch {}/chap-1.js && touch {}/sum.txt".format(dir_name, dir_name))

    except:
        pass

    dir_left_to_create -= 1

sc("rm quicknew.py")