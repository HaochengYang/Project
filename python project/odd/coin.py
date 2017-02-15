import random
def coincorss():
    number = input("Enter the number you want flip the coin: ")
    resultlist = []
    head = 0
    tail = 0
    for amount in range(number):
        flip = random.randint(0,1)
        if flip == 0:
            print("head")
            resultlist.append("head")
        else:
            print("tail")
            resultlist.append("tail")

    for total in (resultlist):
        if total == "head":
            head=head +1
        else:
            tail=tail +1
    print("Total head {}".format(head))
    print("Total tail {}".format(tail))

coincorss()

