name = "Haocheng"
day =32

try:
    print(nmea)
except NameError as msg:
    print(msg)

try:
    if day >31:
        raise ValueError("invalid day number")
except:

