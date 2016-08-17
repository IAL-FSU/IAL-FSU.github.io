function table_exec() {
    var chart = new CanvasJS.Chart("chartContainer", {

      //title:{
       // text:"Workshop Attendees since 2009 by University"        

     // },
      axisX:{
        interval: 1,
        gridThickness: 0,
        labelFontSize: 12,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"

      },
      axisY2:{
        //interlacedColor: "rgba(130,3,85,.1)",
		interlacedColor: "rgba(255,255,255, 1)",
        gridColor: "rgba(130,3,85,.1)"

      },

      data: [
      {     
        type: "bar",
                name: "companies",
        axisYType: "secondary",
        color: "#001232",       
        dataPoints: [
        {y: 7, label: "Outside" },
		{y: 7, label: "USF-SP"  },
		{y: 3, label: "New Coll."  },
		{y: 65, label: "UWF"  },
		{y: 99, label: "USF"  },
		{y: 55, label: "UNF"  },
		{y: 147, label: "UF"  },
		{y: 124, label: "UCF"  },
		{y: 84, label: "FSU"  },
		{y: 90, label: "FIU"  },
		{y: 63, label: "FGCU"  },
		{y: 71, label: "FAU"  },
		{y: 68, label: "FAMU"  }
        ]
      }
      
      ]
    });

chart.render();
}

$(window).load(function(){
	$("chartContainer").text(table_exec());
	//the carousel
    //This carousel example is created with jQuery and the carouFredSel-plugin.
    //http://jquery.com
    //http://caroufredsel.dev7studios.com
    $(function() {
		var $carousel = $('#carousel');
		var $wrapper = $('#wrapper');
		var $window = $(window);
		$window.resize(function() {
			$wrapper.height( $window.height() * 0.45 );
			$carousel.height( $window.height() * 0.45 );
		}).resize();

		$carousel.carouFredSel({
			width: '100%',
			scroll: 1,
			items: {
				visible: 'odd+2',
				start: -1,
				width: 'variable',
				height: 'variable'
			}
		});
	});


});
