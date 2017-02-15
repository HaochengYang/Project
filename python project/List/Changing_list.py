list1 = [26,34,56,78,90,64,2,4,78 ]
list2 = ["Tom","Kewei", "Yang", "Dolphin"]
list3 =[102,312,1233,344]

print(list1)
print(list2)
print(len(list2))
print(len(list1))
list1.append(100)
print(list1)
list1.pop()
print(list1)
list1.extend(list3)
print(list1)
list2.insert(2, "Haocehng")
print(list2)
list2.remove("Haocehng")
print(list2)
list1.count(26)
list2.reverse()
print(list2)
list2.sort()
print(list2)