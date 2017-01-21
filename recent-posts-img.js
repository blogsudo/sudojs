function showrecentposts_img_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img1");
        last_part_1(b, d)
    }
}
function showrecentposts_img_2(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img2");
        last_part_1(b, d)
    }
}
function showrecentposts_img_3(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img3");
        last_part_1(b, d)
    }
}
function showrecentposts_img_4(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img4");
        last_part_1(b, d)
    }
}
function showrecentposts_img_5(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img5");
        last_part_1(b, d)
    }
}
function showrecentposts_img_6(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img6");
        last_part_1(b, d)
    }
}
function showrecentposts_img_7(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img7");
        last_part_1(b, d)
    }
}
function showrecentposts_img_8(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img8");
        last_part_1(b, d)
    }
}
function showrecentposts_img_9(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img9");
        last_part_1(b, d)
    }
}
function showrecentposts_img_10(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("img10");
        last_part_1(b, d)
    }
}

function first_part_1(c, a) {
    var b = c.feed.entry[a],
        d = b.title.$t,
        e, g = '<img src="' + (b.media$thumbnail ? b.media$thumbnail.url : "https://lh3.googleusercontent.com/-WSAcJKxDAy4/VQBEpcN5lgI/AAAAAAAAIxk/Z0JdkyF5CdE/s264/default-no-image.png").replace("s72-c", "w" + bsrpg_thumbSize_1 + "-h" + bsrpg_thumbSize_height_1 + "-c") + '" width="' + bsrpg_thumbSize_1 + '" height="' + bsrpg_thumbSize_height_1 + '">';
    if (a != c.feed.entry.length) {
        for (var f = 0; f < b.link.length; f++)
            if ("alternate" == b.link[f].rel) {
                e = b.link[f].href;
                break
            }
        g = '<a href="' +
            e + '" title="' + d + '">' + g + "</a>";
        d = d.link(e);
        e = "....".link(e);
        b = "content" in b ? b.content.$t : "summary" in b ? b.summary.$t : "";
        b = b.replace(/<\S[^>]*>/g, "");
        return [g, d, b, e]
    }
}

function last_part_1(c, a) {
    var b = c[0],
        d = c[1],
        e = c[2],
        g = c[3],
        f = document.createElement("div");
    f.className = "postw";
    var l = document.createElement("div");
    l.className = "posti";
    var h = document.createElement("div");
    h.className = "tsw";
    var m = document.createElement("div");
    m.className = "mtrpw";
    var k = document.createElement("div");
    k.className = "mtrpwsumm";
    l.innerHTML = b;
    m.innerHTML = d;
    1 == showpostsummary_img && (e.length < numchars_img ? k.innerHTML = e : (e = e.substring(0, numchars_img), b = e.lastIndexOf(" "), e = e.substring(0, b), k.innerHTML =
        e + " " + g));
    h.appendChild(m);
    h.appendChild(k);
    f.appendChild(l);
    f.appendChild(h);
    a.appendChild(f)
};