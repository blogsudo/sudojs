function showrecentposts(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("hlrpsb");
        title_last_part(c, d)
    }
}

function showrecentposts_1(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t1");
        title_last_part(c, d)
    }
}

function showrecentposts_2(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t2");
        title_last_part(c, d)
    }
}

function showrecentposts_3(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t3");
        title_last_part(c, d)
    }
}

function showrecentposts_3(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t4");
        title_last_part(c, d)
    }
}

function showrecentposts_5(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t5");
        title_last_part(c, d)
    }
}

function showrecentposts_6(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t6");
        title_last_part(c, d)
    }
}

function showrecentposts_7(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t7");
        title_last_part(c, d)
    }
}

function showrecentposts_8(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t8");
        title_last_part(c, d)
    }
}

function showrecentposts_9(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t9");
        title_last_part(c, d)
    }
}

function showrecentposts_10(b) {
    numposts = b.feed.entry.length;
    for (var a = 0; a < numposts; a++) {
        var c = title_first_part(b, a),
            d = document.getElementById("t10");
        title_last_part(c, d)
    }
}

function title_first_part(b, a) {
    var c = b.feed.entry[a],
        d = c.title.$t,
        f;
    if (a != b.feed.entry.length) {
        for (var e = 0; e < c.link.length; e++)
            if ("alternate" == c.link[e].rel) {
                f = c.link[e].href;
                break
            }
        return d = d.link(f)
    }
}

function title_last_part(b, a) {
    var c = document.createElement("div");
    c.className = "bbrecpost2";
    var d = document.createElement("span");
    d.innerHTML = b;
    c.appendChild(d);
    a.appendChild(c)
};