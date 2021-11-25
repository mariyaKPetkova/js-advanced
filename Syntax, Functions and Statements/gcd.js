function GetDivisor(a, b) {

    if (b > a) { 
        var temp = a; 
        a = b; 
        b = temp; 
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;

    }
}
