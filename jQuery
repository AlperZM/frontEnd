//jQuery -> javaScript library,

//Basic Notes / Temel notlar
// All functions start whit "$" / Tüm fonksiyonlar "$" işareti ile başlar. 
// CSS selectors are same way (class => "."), (id => "#") / CSS seçicileri ile aynı işaret 
//addClass - removeClass => Ad and remove class on DOM. / addClass - removeClass => DOM üzerine CSS class ekler ve kaldırır.

//Documnet Ready Function, !important / Önemli
<script>$(document).ready(function() {});</script>
<script>
  $(document).ready(function() {
    $(".well").addClass("animated bounce");
  });
</script>

// .css => change the css of an element. / .css => bir elementin CSS değişikliğini yapar.
$("#target1").css("color", "blue");

//.prop => change any element whitout CSS / .prop => CSS olmadan bir HTML öğesini değiştirir.
$("#target1").prop("disabled", true);

//.html => change - add any tag and text / .html => tag ve yazı eklemek, değiştirmek için kullanılır.
//.text() => only changes text / .text() => sadece yazıyı değiştirir.
$("h3").html("<em>jQuery Playground</em>");

//.remove() => removes entire html element / .remove() => bir html elementini tamamen kaldırr.
$("#target4").remove();

//appendTo() => append an other element / appendTo() => bir elementi diğer elemente ekler.
$("#target2").appendTo("#right-well");

//.clone() => clones an element / .clone() => bir elementi klonlar.
$("#target5").clone().appendTo("#left-well");//chaining of attributes / özelikler zincir ile bağlanabilir.

//parent() => reach the parent element of selected element / parent() => seçili elementin üst elementini seçer.
$("#target1").parent().css("background-color", "red");

//children() => opposite of the parent()/ parent() karşıtı.
$("#right-well").children().css("color","orange");

//target:nth-child(n) => n.th child element // n.inci alt element
$(".target:nth-child(3)").addClass("animated bounce");

//:odd or :even => odd(1 - 3 - 5...), even(2 - 4 - 6...). / odd tek sayılar, even çift sayılar (0-..)
$(".target:odd").addClass("animated shake");

$("body").addClass("animated fadeOut"); // selects <body> element




