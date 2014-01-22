// WIP

// Table row variables
      var tableHeadings, columnAlignments, rows = [];
      //var columnAlignments = [];
      //var rows = [];
      
      // Table settings - onChange bindings
        $("#match-format").change(function() {
          var selection = $("#match-format").val();
          if (selection == "alphanumeric") {
            $("label[for='letter-prefix']").removeClass("hidden");
            $("#letter-prefix").removeClass("hidden");
          }
          else {
            $("label[for='letter-prefix']").addClass("hidden");
            $("#letter-prefix").addClass("hidden");
          }
        });
        
        // Only allow one letter inputs for match-prefixing
        $(".alphaonly").bind("keyup",function(){ 
          var letters = $(this).val().toUpperCase().replace(/[^A-Z$]/g,'');
          if (letters.length > 1)
            $(this).val(letters.substr(letters.length - 1));
          else
            $(this).val(letters);
        });
        
        // Links the team change dropdown menus
        $("#team-format").change(function() {
          var selection = $("#team-format").val();
          if (selection == "Team A") $("#team-format2").val("Team B");
          else if (selection == "Team 1") $("#team-format2").val("Team 2");
          else $("#team-format2").val("Red Team");
        });
        $("#team-format2").change(function() {
          var selection = $("#team-format2").val();
          if (selection == "Team B") $("#team-format").val("Team A");
          else if (selection == "Team 2") $("#team-format").val("Team 1");
          else $("#team-format").val("Blue Team");
        });
      
      // Update Match Numbers
      function updateMatchNumbers() {
        var matchPrefix = "";
        if ($("#prefix-match").checked())
          matchPrefix = $("#letter-prefix").val().toUpperCase();
        var numRows = $("#live-edit table tbody tr").length;
        
        // TODO: Update first columns from $("#live-edit table tbody tr")
        String.fromCharCode(64+x);
      }
      
      // Make markdown output uneditable
      $("#output").attr("readonly", "readonly");