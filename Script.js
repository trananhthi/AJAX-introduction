$(document).ready(function () {

    add_text = (id, text) => {
        $(id).text(text)
    }

    const btn = $('.page-btn')
    let iteration = 1
    let temp_infor
    let temp_infor2
    /* hàm thay đổi nội dung */
    btn6 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn6").addClass("active")
        $("#btn6").data("select", "selected")
        iteration = 6

        add_text("#odd-row", "11")
        add_text("#odd-fn", content.data[4].first_name)
        add_text("#odd-ln", content.data[4].last_name)
        add_text("#odd-email", content.data[4].email)
        $("#odd-img img").attr("src", content.data[4].avatar)

        add_text("#even-row", "12")
        add_text("#even-fn", content.data[5].first_name)
        add_text("#even-ln", content.data[5].last_name)
        add_text("#even-email", content.data[5].email)
        $("#even-img img").attr("src", content.data[5].avatar)
    }

    btn5 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn5").addClass("active")
        $("#btn5").data("select", "selected")
        iteration = 5

        add_text("#odd-row", "9")
        add_text("#odd-fn", content.data[2].first_name)
        add_text("#odd-ln", content.data[2].last_name)
        add_text("#odd-email", content.data[2].email)
        $("#odd-img img").attr("src", content.data[2].avatar)

        add_text("#even-row", "10")
        add_text("#even-fn", content.data[3].first_name)
        add_text("#even-ln", content.data[3].last_name)
        add_text("#even-email", content.data[3].email)
        $("#even-img img").attr("src", content.data[3].avatar)
    }

    btn4 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn4").addClass("active")
        $("#btn4").data("select", "selected")
        iteration = 4

        add_text("#odd-row", "7")
        add_text("#odd-fn", content.data[0].first_name)
        add_text("#odd-ln", content.data[0].last_name)
        add_text("#odd-email", content.data[0].email)
        $("#odd-img img").attr("src", content.data[0].avatar)

        add_text("#even-row", "8")
        add_text("#even-fn", content.data[1].first_name)
        add_text("#even-ln", content.data[1].last_name)
        add_text("#even-email", content.data[1].email)
        $("#even-img img").attr("src", content.data[1].avatar)
    }

    btn3 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn3").addClass("active")
        $("#btn3").data("select", "selected")
        iteration = 3;

        add_text("#odd-row", "5")
        add_text("#odd-fn", content.data[4].first_name)
        add_text("#odd-ln", content.data[4].last_name)
        add_text("#odd-email", content.data[4].email)
        $("#odd-img img").attr("src", content.data[4].avatar)

        add_text("#even-row", "6")
        add_text("#even-fn", content.data[5].first_name)
        add_text("#even-ln", content.data[5].last_name)
        add_text("#even-email", content.data[5].email)
        $("#even-img img").attr("src", content.data[5].avatar)
    }

    btn2 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn2").addClass("active")
        $("#btn2").data("select", "selected")
        iteration = 2

        add_text("#odd-row", "3")
        add_text("#odd-fn", content.data[2].first_name)
        add_text("#odd-ln", content.data[2].last_name)
        add_text("#odd-email", content.data[2].email)
        $("#odd-img img").attr("src", content.data[2].avatar)

        add_text("#even-row", "4")
        add_text("#even-fn", content.data[3].first_name)
        add_text("#even-ln", content.data[3].last_name)
        add_text("#even-email", content.data[3].email)
        $("#even-img img").attr("src", content.data[3].avatar)
    }

    btn1 = (content) => {
        for (let i = 0; i < btn.length; i++) {
            if ($(btn[i]).data("select") == "selected") {
                $(btn[i]).data("select", "")
                $(btn[i]).removeClass("active");
            }
        }
        $("#btn1").addClass("active")
        $("#btn1").data("select", "selected")
        iteration = 1

        add_text("#odd-row", "1")
        add_text("#odd-fn", content.data[0].first_name)
        add_text("#odd-ln", content.data[0].last_name)
        add_text("#odd-email", content.data[0].email)
        $("#odd-img img").attr("src", content.data[0].avatar)

        add_text("#even-row", "2")
        add_text("#even-fn", content.data[1].first_name)
        add_text("#even-ln", content.data[1].last_name)
        add_text("#even-email", content.data[1].email)
        $("#even-img img").attr("src", content.data[1].avatar)
    }

    /* Page 1->3 */
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const infor = JSON.parse(this.responseText)
        temp_infor = infor
        add_text("#odd-fn", infor.data[0].first_name)
        add_text("#odd-ln", infor.data[0].last_name)
        add_text("#odd-email", infor.data[0].email)
        $("#odd-img img").attr("src", infor.data[0].avatar)

        add_text("#even-fn", infor.data[1].first_name)
        add_text("#even-ln", infor.data[1].last_name)
        add_text("#even-email", infor.data[1].email)
        $("#even-img img").attr("src", infor.data[1].avatar)

        /* Page 1 */
        $("#btn1").click(function () {
            btn1(infor)
        });

        /* Page 2 */
        $("#btn2").click(function () {
            btn2(infor)
        });

        /* Page 3 */
        $("#btn3").click(function () {
            btn3(infor)
        });

    }
    xhttp.open("GET", "https://reqres.in/api/users?delay=3");
    xhttp.send();

    /* Page 4->6 */
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onload = function () {
        const infor2 = JSON.parse(this.responseText)
        temp_infor2 = infor2

        $("#btn4").click(function () {
            btn4(infor2)
        });

        $("#btn5").click(function () {
            btn5(infor2)
        });


        $("#btn6").click(function () {
            btn6(infor2)
        });

    }
    xhttp2.open("GET", "https://reqres.in/api/users?page=2");
    xhttp2.send();

    $(".pre-btn").click(function () {
        if (iteration > 1) {
            iteration--;
            console.log(iteration)
            switch (iteration) {
                case 1:
                    btn1(temp_infor);
                    break;
                case 2:
                    btn2(temp_infor);
                    break;
                case 3:
                    btn3(temp_infor);
                    break;
                case 4:
                    btn4(temp_infor2);
                    break;
                case 5:
                    btn5(temp_infor2);
                    break;
                default:
                    btn6(temp_infor2);
            }

        }
    })

    $(".next-btn").click(function () {
        if (iteration < 6) {
            iteration++;
            console.log(iteration)
            switch (iteration) {
                case 1:
                    btn1(temp_infor);
                    break;
                case 2:
                    btn2(temp_infor);
                    break;
                case 3:
                    btn3(temp_infor);
                    break;
                case 4:
                    btn4(temp_infor2);
                    break;
                case 5:
                    btn5(temp_infor2);
                    break;
                default:
                    btn6(temp_infor2);
            }

        }
    })
});