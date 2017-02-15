A = [1,2,34,67,8,9,23,5,45,778,35,234,123,123]
i = 0
j = len(A)-1
x =0
sum = 0

def find_balance():
    for i in A:
      sum = sum + len(i)
      x = sum
      i+1

    for i in A:
        j = sum - len(i)
        i - 1

    if  x == sum:
         print(x)
         print("The balance point is:", x)
         return True
    else:
        return False
