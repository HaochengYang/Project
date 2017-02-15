setting_list ={"gua","haha", "sha" ,"aini","yo"}
setting_list2 ={ "sha" ,"aini","yo"}

def main():
    print("haha" in setting_list)
    print("sha" in setting_list2)

    print(setting_list)
    print(type(setting_list))

    setting_list.add("T")
    print(setting_list)

    setting_list.update("coffee","tidy", "likemost")
    print(setting_list)

    setting_list.pop()
    print(setting_list)

    print(setting_list.intersection(setting_list2))
    print(setting_list.difference(setting_list2))

    setting_list.discard(3)
    print(setting_list)

main()
