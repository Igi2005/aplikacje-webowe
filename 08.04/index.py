f = open("slowa.txt", "r")

line = f.readline()
lista = []

while line:
    w = 0
    k = 0
    for i in line:
        if i == "w":
            w = w + 1
        if i == "k":
            k = k + 1
    if w == k:
        lista.append(line)
    line = f.readline()

f.close()

print("wyniki ------------------------------------------\n")
res = ""
for i in lista:
    print(i)
    res = res + i + "\n"

f2 = open("wyniki4_1.txt", "w")
f2.write(res)
f2.close()
