webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\" title=\"{{titulo}}\">\n    <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\"/>\n</ActionBar>\n\n<FlexboxLayout class=\"page\" *ngIf=\"ListaNoticias\">\n    <ListView id=\"lista-noticias\" [items]=\"itensjson\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\n        <ng-template let-titulo=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <StackLayout orientation=\"horizontal\" class=\"list-group-item\">\n                <Image width=\"105\" height=\"105\" stretch=\"aspectFill\" [src]=\"titulo.image_thumb.replace('http', 'https')\" class=\"thumb m-b-20\"></Image>\n                <StackLayout>\n                    <Label [text]=\"titulo.title\"></Label>\n                    <Label [text]=\"titulo.description\" textWrap=\"true\" WidthRequest=\"50\"  class=\"body texto-resumo\"></Label>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n    </ListView>\n</FlexboxLayout>\n\n<GridLayout class=\"page\" *ngIf=\"FichaNoticia\" (tap)=\"fechaNoticia()\">\n        <ScrollView #scrollView (scroll)=\"onScroll($event, scrollView, topView)\">\n                <StackLayout>\n                    <StackLayout #topView height=\"250\" style=\"background-image: url('{{imagem_noticia.replace('http', 'https')}}'); background-repeat: no-repeat; background-position: center; background-size: cover;\">\n                    </StackLayout>\n                    <StackLayout width=\"100%\" backgroundColor=\"white\" padding=\"10\">\n                        <!--Add your page content here-->\n                        <Label textWrap=\"true\" text=\"{{titulo_noticia}}\" class=\"h2 description-label\"></Label>\n                        <Label textWrap=\"true\" class=\"p-10\" text=\"{{texto_noticia}}.\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </ScrollView>\n</GridLayout>\n\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBNEQsUUFBUSx3MENBQXcwQyx5Q0FBeUMsR0FBRyw4QkFBOEIsNkJBQTZCLHdCQUF3Qix5UEFBeVAsZ0JBQWdCLHFIQUFxSCxlQUFlLCtIIiwiZmlsZSI6IjAuZmY2MzU3NTFhNjc4ODA2NTgzNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiB0aXRsZT1cXFwie3t0aXR1bG99fVxcXCI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIi8+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICpuZ0lmPVxcXCJMaXN0YU5vdGljaWFzXFxcIj5cXG4gICAgPExpc3RWaWV3IGlkPVxcXCJsaXN0YS1ub3RpY2lhc1xcXCIgW2l0ZW1zXT1cXFwiaXRlbnNqc29uXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXRpdHVsbz1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXG4gICAgICAgICAgICA8IS0tIFRoZSBpdGVtIHRlbXBsYXRlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgcm9vdCB2aWV3IGNvbnRhaW5lciAoZS5nLiBHcmlkTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLiktLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XFxcIjEwNVxcXCIgaGVpZ2h0PVxcXCIxMDVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIFtzcmNdPVxcXCJ0aXR1bG8uaW1hZ2VfdGh1bWIucmVwbGFjZSgnaHR0cCcsICdodHRwcycpXFxcIiBjbGFzcz1cXFwidGh1bWIgbS1iLTIwXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJ0aXR1bG8udGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJ0aXR1bG8uZGVzY3JpcHRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBXaWR0aFJlcXVlc3Q9XFxcIjUwXFxcIiAgY2xhc3M9XFxcImJvZHkgdGV4dG8tcmVzdW1vXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcbjwvRmxleGJveExheW91dD5cXG5cXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgKm5nSWY9XFxcIkZpY2hhTm90aWNpYVxcXCIgKHRhcCk9XFxcImZlY2hhTm90aWNpYSgpXFxcIj5cXG4gICAgICAgIDxTY3JvbGxWaWV3ICNzY3JvbGxWaWV3IChzY3JvbGwpPVxcXCJvblNjcm9sbCgkZXZlbnQsIHNjcm9sbFZpZXcsIHRvcFZpZXcpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICN0b3BWaWV3IGhlaWdodD1cXFwiMjUwXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCd7e2ltYWdlbV9ub3RpY2lhLnJlcGxhY2UoJ2h0dHAnLCAnaHR0cHMnKX19Jyk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCIgcGFkZGluZz1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3t0aXR1bG9fbm90aWNpYX19XFxcIiBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwicC0xMFxcXCIgdGV4dD1cXFwie3t0ZXh0b19ub3RpY2lhfX0uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==