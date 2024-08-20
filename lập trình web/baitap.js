// câu 1
document.getElementById('title').textContent = 'Hello, DOM!';
// câu 2
document.getElementById('text').style.color = 'blue';
// câu 3
let newItem = document.createElement('li');
newItem.textContent = 'Đi chợ';
document.getElementById('list').appendChild(newItem);
// câu 4
let elementToRemove = document.getElementById('remove-me');
elementToRemove.remove();
// câu 5
function changeimage() {
    document.getElementById('image').src = 'https://th.bing.com/th/id/OIP.I-lz_xMF_s-SAnu5wK-fGAHaEK?w=728&h=410&rs=1&pid=ImgDetMain';
}
// câu 6
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    
    alert('Nút đã được ấn !');
});
// câu 7
 const buttons = document.getElementById('updateBtn');
 buttons.addEventListener('click', function() {
     const paragraphs = document.querySelectorAll('p');
     paragraphs.forEach(function(paragraph) {
         paragraph.textContent = 'Updated paragraph';
     });
 });
//  câu 8
function createTable() {
    
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    
    for (let i = 0; i < 3; i++) {
        
        const tr = document.createElement('tr');

        
        for (let j = 0; j < 3; j++) {
            
            const td = document.createElement('td');
            td.textContent = `Row ${i + 1}, Cell ${j + 1}`;
            td.style.border = '1px solid black';
            td.style.padding = '8px';

           
            tr.appendChild(td);
        }

        
        table.appendChild(tr);
    }

    
    const container = document.getElementById('table-container');
    container.appendChild(table);
}
createTable();
// câu 9
 divcount =document.getElementsByTagName('div').length;
document.getElementById('count-display').textContent = 'có' +  divcount  + 'thẻ div trong tài liệu.';
// câu 10
const press = document.getElementById('btnupdate');
press.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('b');
    paragraphs.forEach(function(paragraph) {
        paragraph.textContent = 'Updated item';
    });
});