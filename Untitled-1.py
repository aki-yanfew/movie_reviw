#input the base data

total =float(input("Enter the principal($): "))
rate =float(input("Enter the interest each year(%): "))
year =float(input("Enter the number of year: "))

rate = rate/100
year_now = 1

#carculate

while year_now <= year:
    invest = total*rate
    total = total + invest
    print(f"Year {year_now}:${total:.2f}")

    year_now +=1