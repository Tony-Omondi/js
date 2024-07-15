// for (let i = 0; i <10; i++) {
//     if(i%2 == 0)
//         continue;
//     console.log("Inner loop iteration:" + i);
// }
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Inner loop iteration: " + i);
}
