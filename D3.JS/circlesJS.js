var r = 90,
    colors = {
        a: "#b9f6df",
        b: "#ffb6c1",
        c: "#5DADE2",
        ab: "#e6b09b",
        bc: "#BB8FCE",
        ca: "#2980B9",
        abc: "#993399"
    };

var data;
var reset = "";

var board = d3.select("body").append("svg:svg").attr({
    width: 3 * r,
    height: 3 * r
})

function dots(x_0, y_0, r, n) {
    var a = [],
        d_alpha = 2 * Math.PI / n;
    for (var alpha = 0; alpha < 2 * Math.PI; alpha += d_alpha) {
        a.push([
            x_0 + r * Math.cos(alpha),
            y_0 + r * Math.sin(alpha)
        ]);
    }
    return (a);
}

var shape_a = d3.geom.polygon(dots(r, r, r, 80));
var shape_b = d3.geom.polygon(dots(2 * r, r, r, 80));
var shape_c = d3.geom.polygon(dots(1.5 * r, 2 * r, r, 80));

var shape_a_x_b = shape_a.slice();
shape_b.reverse().clip(shape_a_x_b);

var shape_b_x_c = shape_c.slice();
shape_b.clip(shape_b_x_c);

var shape_c_x_a = shape_c.slice();
shape_a.reverse().clip(shape_c_x_a);

var shape_abc = shape_c_x_a.slice();
d3.geom.polygon(shape_b_x_c.reverse()).clip(shape_abc);

var tooltip1 = d3.select("body")
    .append("div")
    .attr("data-toggle", "tooltip")
    .style("position", "absolute")
    .style("z-index", "50")
    .style("text-align", "center")
    .style("visibility", "hidden")
    .text("Public Only");

var tooltip2 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Co-mentioned only");

var tooltip3 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Public + Co-mentioned");


var tooltip4 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Agency Only");

var tooltip5 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Agency + Co-mentioned");

var tooltip6 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Agency + Public");

var tooltip7 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Agency + Public + Co-mentioned");

var selecter = d3.select("#select")
    .on("change", function() {
        var sel = document.getElementById('select')
        sel.disabled=true;
        console.log("hey");
        console.log(sel.options[sel.selectedIndex].value);
        var j = 0
            //d3.select("table").remove();

        //d3.select("table").deleteRow(1);
        //document.getElementById("table").deleteRow(0);
        console.log(document.getElementById("table").rows.length);
        for (var i = 1; i < document.getElementById("table").rows.length; i++) {
            console.log(document.getElementById("table").rows[i].cells[1].innerHTML);
            if (sel.options[sel.selectedIndex].value != document.getElementById("table").rows[i].cells[3].innerHTML) {
                console.log(document.getElementById("table").rows[i].cells[1].innerHTML);
                document.getElementById("table").deleteRow(i);
                i--;
                j++;
            }
        }
        console.log("j=" + j);
        stattable();
    });

var reset = d3.select("#button")
    .on("click", function() {
        var sel = document.getElementById('select')
        sel.disabled=false;
        if (reset == "tabulate") {
            d3.select(".data").remove();
            d3.csv('Ponly.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate(data, columns)
            })
        } else if (reset == "tabulate2") {
            d3.select(".data").remove();
            d3.csv('Conly.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate2(data, columns)
            })
        } else if (reset == "tabulate3") {
            d3.select(".data").remove();
            d3.csv('Aonly.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate3(data, columns)
            })
        } else if (reset == "tabulate4") {
            d3.select(".data").remove();
            d3.csv('PC.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate4(data, columns)
            })
        } else if (reset == "tabulate5") {
            d3.select(".data").remove();
            d3.csv('AC.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate5(data, columns)
            })
        } else if (reset == "tabulate6") {
            d3.select(".data").remove();
            d3.csv('AP.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate6(data, columns)
            })
        } else if (reset == "tabulate7") {
            d3.select(".data").remove();
            d3.csv('APC.csv', function(data) {
                var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
                tabulate7(data, columns)
            })
        } else {
            d3.select(".data").remove();
        }
        sel.value= sel.options[0].value;
    });


var circle1 = board.append("svg:polygon")
    .attr({
        points: shape_a,
        fill: colors.a
    })
    .on("mouseover", function() {
        var counter = 0;
        d3.csv("Ponly.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            //document.getElementById("p1").innerHTML = counter;
            document.getElementById("p1").innerHTML = "6274";
              
        })
        return tooltip1.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip1.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";
        return tooltip1.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar text-primary")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Public Only")
            .style("color", "#5DADE2");
        reset = "tabulate"
        d3.csv('AP.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate(data, columns)
        })
        var field1 = new Array();

        d3.csv("AP.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });

// circle1.append("text")
//     .attr("x", 10)
//     .attr("y", 10)
//     .attr("dy", ".35em")
//     .text("dnue");

var tabulate = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("AP.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
    stattable();
    return table;
    
}


board.append("svg:polygon")
    .attr({
        points: shape_b,
        fill: colors.b
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("Conly.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip2.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip2.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        //console.log("out");
        document.getElementById("p1").innerHTML = "";
        return tooltip2.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Co-mentioned Only")
            .style("color", "#5DADE2");

        reset = "tabulate2";
        d3.csv('Conly.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate2(data, columns)
        })
        var field1 = new Array();

        d3.csv("Conly.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });

    });


var tabulate2 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("Conly.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
stattable();
    return table;
    
}

board.append("svg:polygon")
    .attr({
        points: shape_c,
        fill: colors.c
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("Aonly.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip4.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip4.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";
        return tooltip4.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Agency Only")
            .style("color", "#5DADE2");

        reset = "tabulate3";
        d3.csv('Aonly.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate3(data, columns)
        })
        var field1 = new Array();

        d3.csv("Aonly.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });


var tabulate3 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("Aonly.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
        stattable();
    return table;
  
}


board.append("svg:polygon")
    .attr({
        points: shape_a_x_b,
        fill: colors.ab
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("PC.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip3.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip3.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";
        return tooltip3.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Public + Co-mentioned")
            .style("color", "#5DADE2");

        reset = "tabulate4";
        d3.csv('PC.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate4(data, columns)
        })
        var field1 = new Array();

        d3.csv("PC.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });


var tabulate4 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("PC.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
    stattable();
    return table;

}

board.append("svg:polygon")
    .attr({
        points: shape_b_x_c,
        fill: colors.bc
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("AC.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip5.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip5.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";
        return tooltip5.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Agency + Co-mentioned")
            .style("color", "#5DADE2");

        reset = "tabulate5";
        d3.csv('AC.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate5(data, columns)
        })
        var field1 = new Array();

        d3.csv("AC.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });


var tabulate5 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("AC.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
    stattable();
    return table;

}


board.append("svg:polygon")
    .attr({
        points: shape_c_x_a,
        fill: colors.ca
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("AP.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip6.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip6.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";

        return tooltip6.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Agency + Public")
            .style("color", "#5DADE2");

        reset = "tabulate6";
        d3.csv('AP.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate6(data, columns)
        })
        var field1 = new Array();

        d3.csv("AP.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });

var tabulate6 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("AP.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
  stattable();
    return table;

}

board.append("svg:polygon")
    .attr({
        points: shape_abc,
        fill: colors.abc
    }).on("mouseover", function() {
        var counter = 0;
        d3.csv("APC.csv", function(csv) {
            csv.map(function(d) {
                counter++;
            })
            document.getElementById("p1").innerHTML = counter;
        })
        return tooltip7.style("visibility", "visible").style("color", "yellow");
    })
    .on("mousemove", function() {
        return tooltip7.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
        document.getElementById("p1").innerHTML = "";
        return tooltip7.style("visibility", "hidden");
    })
    .on("click", function() {
        document.getElementById('select').innerHTML = "";
        d3.select(".data").remove();
        d3.select(".bar").remove();
        d3.select("body")
            .append("div")
            .attr("class", "bar")
            .style("position", "absolute")
            .style("z-index", "50")
            .style("visibility", "visible")
            .text("Agency + Public + Co-mentioned")
            .style("color", "#5DADE2");


        reset = "tabulate7";
        d3.csv('APC.csv', function(data) {
            var columns = ['PoliceDepartment', 'UserID', 'UserName', 'PDLocation', 'UserLocation','UserRole']
            tabulate7(data, columns)
        })
        var field1 = new Array();
        d3.csv("APC.csv", function(csv) {
            field1.push("All");
            csv.map(function(d) {
                var flag = 1;
                for (var j = 0; j <= field1.length; j++) {
                    if (field1[j] == d.PDLocation) {
                        flag = 0;
                    }
                }
                if (flag == 1) {
                    field1.push(d.PDLocation);
                }
            })
            console.log("field1", field1);
            var filter = document.getElementById('select');
            filter.disabled=false;
            for (var i = 0; i < field1.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = field1[i];
                opt.value = field1[i];
                filter.appendChild(opt);
            }
        });
    });


var tabulate7 = function(data, columns) {
    var table = d3.select('body').append('table').attr("class", "table table-hover table-striped table data").attr("id", "table");
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) {
            return d
        })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .on("click", function(d, i) {
            d3.csv("APC.csv", function(d) {
                return {
                    UserID: d.UserID,
                };
            }, function(data) {
                window.open("https://twitter.com/intent/user?user_id=" + data[i].UserID);
                console.log(data[i].UserID);
            });

        });

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append('td')
        .text(function(d) {
            return d.value
        })
    stattable();
    return table;
}

var stattable = function() {
    var sttable = document.getElementById("stat");
   
for(var i = sttable.rows.length-1; i > 0; i--)
{
    sttable.deleteRow(i);
    console.log("deleting");
}

    var field1 = new Array();
    var field2 = new Array();
    var total=0;


// var header = sttable.createTHead();

// // Create an empty <tr> element and add it to the first position of <thead>:
// var row = header.insertRow(0);     

// // Insert a new cell (<td>) at the first position of the "new" <tr> element:
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(0);
// var cell3 = row.insertCell(0);
// // Add some bold text in the new cell:
// cell1.innerHTML = "UserRole";
// cell2.innerHTML = "Number";
// cell3.innerHTML = "Percent";

    for (var i = 1; i < document.getElementById("table").rows.length; i++) {
    var flag = 1;
    for( var j = 0; j <=field1.length; j++){
    if (field1[j] == document.getElementById("table").rows[i].cells[5].innerHTML) {
      flag = 0;
      field2[j]=field2[j]+1;
    }
    }
    if (flag == 1) {
        field1.push(document.getElementById("table").rows[i].cells[5].innerHTML);
        field2.push(1);
    }
    }
    console.log(field1);
    console.log(field2);
    var table = document.getElementById("stat");
    for(var l=0;l<field2.length;l++){
        total=total+field2[l];
    }

field1.push("ALL");
field2.push(total);

for(var k=field1.length-1;k>=0;k--){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
console.log(total);
var statresult= ((field2[k]/total)*100).toFixed(2) +"%";
if(statresult == "NaN%"){
    statresult = "0%";
}
// Add some text to the new cells:
cell1.innerHTML = field1[k];
cell2.innerHTML = field2[k];
cell3.innerHTML = statresult;
}
}