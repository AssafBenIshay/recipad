`${hours}שעות ו${minutes} דקות.`
navigator.clipboard
    .writeText("").then(linkBtn.innerHTML = 'אין קישור מועתק כרגע')

    mainComtainer.appendChild(recipeImageLink)
    let h4Element = recipeImageLink.querySelector('h4')
    let textareaElement = recipeImageLink.querySelector('.image-input')

    pasteBtn.addEventListener('click', (e) => {
        navigator.clipboard.readText().then((address) => {
            if (address.length > 1) {
                if (testIfImage(address) === true) {
                    //show image after button pressed
                    let img = document.createElement('img')
                    img.src = address
                    let imageDiv = recipeImageLink.querySelector('.image-holder')
                    imageDiv.appendChild(img)
                    paste(address)
   
                }

        
            } else {
                alert('יש להעתיק את קישור התמונה הרצויה')
            }
        })
    })


<w------------------------- תקלות לתיקון!! ---------------------------->
..<!-- לסדר את כפתור הוספת המתכון שיחזור לעבוד כאשר נגמר הוספת מתכון -->
..<!-- --לתקן את הודעת השגיאה על תקלה כאשר הושלמה פעולת הכנסת מתכון-->
..<!-- לסדר את הפעלת הלב כדי לסמן מתכוני מועדפים-->
<!-- //? add category add/remove screen-->
..<!-- add DELETE recipe Button -->
..<!-- make searchbar work -->
..<!-- לתקן את מנגנון בניית תפריט הקטגוריות מהכפילויות -->
..<!-- //* לסדר שכאשר לוחצים לב בבר אפ הוא הופך לצהוב ומציג את כל המועדפים בלבד -->
..<!-- //* להתחיל מ submitstage.jsx כדי להטמיע את שליחת המידע לFIREBASE>