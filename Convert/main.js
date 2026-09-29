let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z); 

for (let i = 0; i < 3; i++) {
    console.log([x,y,z][i], typeof [x,y,z][i]);
}