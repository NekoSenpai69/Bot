const gis = require("async-g-i-s")
const app = require ("express")();
const PORT = process.env.PORT || 8080;
app.get("/gimage",(req,res) => {
async function gisimg() {
          try {
let q = req.query.q

            const results = await gis(q);
            const filter = results.filter(item =>
              item.url.endsWith(".jpg") || item.url.endsWith(".png"))


            const result = filter[Math.floor(Math.random() * 15)]
            if (result.url === undefined) {
              console.log(result);
              m.reply("No data ")
            } else {
             res.send(result) 
              
            } 
          }
          catch (err) {
            console.error(err);
          } 
        } gisimg()
})
app.listen(PORT)