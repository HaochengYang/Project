information ={"name":"Hoacheng", "School":"UW Bothell","Grade":"Graduate School"}

def main():
    print(type(information))
    print(information['name'])
    print(information.keys())

    del information['name']
    information['first_name'] ='Haocheng'
    print(information)

    print('School' in information)

main()
