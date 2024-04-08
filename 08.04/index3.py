f = open("przyklad.txt", "r")

line = f.readline()
lista = ["w","a","k","c","j","e"]
res = []
while line:
    listaIlosc = [0,0,0,0,0,0]
    test = 0
    dlugosc = len(line) - 1
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

    if test == 0:
        res.append(dlugosc)
    else:
        helpik = dlugosc - (7 * test)
        res.append(helpik)
    print(listaIlosc)
    line = f.readline()
    
res2 = ""
for i in res:
    print(i)
    res2 = res2 + str(i) + "\n"



f2 = open("wyniki4_3.txt", "w")
f2.write(res2)
f2.close()
