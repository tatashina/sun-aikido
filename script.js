var videoLessons=document.querySelectorAll("#aikido_exam td a");videoLessons.forEach(function(e){var t=e.classList.contains("five"),n=e.classList.contains("four"),s=e.classList.contains("three"),o=e.classList.contains("two"),c=e.classList.contains("one");n||t||s||o||c||e.parentNode.classList.add("always-hidden")}),document.getElementById("five_box").addEventListener("change",function(){document.querySelectorAll("#aikido_exam td a").forEach(function(e){var t=e.classList.contains("five");e.parentNode.classList.toggle("hidden",document.getElementById("five_box").checked&&!t)})}),document.getElementById("four_box").addEventListener("change",function(){document.querySelectorAll("#aikido_exam td a").forEach(function(e){var t=e.classList.contains("five"),n=e.classList.contains("four");e.parentNode.classList.toggle("hidden",document.getElementById("four_box").checked&&!n&&!t)})}),document.getElementById("three_box").addEventListener("change",function(){document.querySelectorAll("#aikido_exam td a").forEach(function(e){var t=e.classList.contains("five"),n=e.classList.contains("four"),s=e.classList.contains("three");e.parentNode.classList.toggle("hidden",document.getElementById("three_box").checked&&!n&&!t&&!s)})}),document.getElementById("two_box").addEventListener("change",function(){document.querySelectorAll("#aikido_exam td a").forEach(function(e){var t=e.classList.contains("five"),n=e.classList.contains("four"),s=e.classList.contains("three"),o=e.classList.contains("two");e.parentNode.classList.toggle("hidden",document.getElementById("two_box").checked&&!n&&!t&&!s&&!o)})}),document.getElementById("one_box").addEventListener("change",function(){document.querySelectorAll("#aikido_exam td a").forEach(function(e){var t=e.classList.contains("five"),n=e.classList.contains("four"),s=e.classList.contains("three"),o=e.classList.contains("two"),c=e.classList.contains("one");e.parentNode.classList.toggle("hidden",document.getElementById("one_box").checked&&!n&&!t&&!s&&!o&&!c)})})
