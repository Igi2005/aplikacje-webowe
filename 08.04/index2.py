f = open("slowa.txt", "r")

line = f.readline()
lista = ["w","a","k","c","j","e"]
res = []
while line:
    listaIlosc = [0,0,0,0,0,0]
    test = 0
    for i in line:
        if i == "w":
            listaIlosc[0] = listaIlosc[0] + 1
        if i == "a":
            listaIlosc[1] = listaIlosc[1] + 1
        if i == "k":
            listaIlosc[2] = listaIlosc[2] + 1
        if i == "c":
            listaIlosc[3] = listaIlosc[3] + 1
        if i == "j":
            listaIlosc[4] = listaIlosc[4] + 1
        if i == "e":
            listaIlosc[5] = listaIlosc[5] + 1
    listaIlosc[1] = listaIlosc[1] // 2
    test = min(listaIlosc)
    print(listaIlosc)
    res.append(test)
    line = f.readline()
    
res2 = ""
for i in res:
    print(i)
    res2 = res2 + str(i) + "\n"



f2 = open("wyniki4_2.txt", "w")
f2.write(res2)
f2.close()
