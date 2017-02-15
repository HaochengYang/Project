char = ['A','B','C']
fruit = ('apple','banana','cherry','orange')
info = {'name':'Haocheng', 'school':'UW', 'grade':'Senior'}
for item in enumerate(char):
    print(item,)

for item in zip(char, fruit):
    print(item)

for key, value in info.items():
    print(key,'=', value)
