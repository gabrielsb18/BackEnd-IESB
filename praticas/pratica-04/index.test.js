const supertest = require("supertest");
const app = require("./index");

const request = supertest(app);

test("Retorna 200", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);
});

test("Retorna 201 no POST", async function(){
    const response = await request.post("/")
        .json({});
    expect(response.status).toBe(201); 
});

test("Retorna 200 no PUT", async function(){
    const response = await request.put("/");
    expect(response.status).toBe(200);
});

test("Retorna 204 no DELETE", async function(){
    const response = await request.delete("/1");
    expect(response.status).toBe(204);
});