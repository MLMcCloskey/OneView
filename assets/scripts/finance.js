$("#homeButtons").on("click", "#financeBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").append(homeBtn+'<button type="button" class="btn btn-success" id="stocksBtn">STOCKS</button> <br> <button type="button" class="btn btn-primary" id="cryptoBtn">CRYPTO</button> <br> <button type="button" class="btn btn-danger" id="financeNewsBtn">NEWS</button>');    
});

$("#homeButtons").on("click", "#stocksBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    $("#map").append('<iframe src="https://investingwidgets.com/leading-stocks?theme=darkTheme" width="80%" height="360" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe><div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;">')                                   
});