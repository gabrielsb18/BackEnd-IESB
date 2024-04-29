const supertest = require("supertest");
const app = require("./index");

const request = supertest(app);

test("Deve retorna 200 e um json no GET /produtos/", async function(){
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retonar 200 e um json no GET /produtos/id",async function(){
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retonar 404 e um JSON no GET /produtos/id",async function(){
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar o status 201 no POST /produtos/', async function(){
    const response = await request.post("/produtos/")
    .json({"nome": "Banana", "preco": 20.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/); 
});

test("Deve retornar um 422 no POST /produtos/", async function(){
    const response = await request.post("/produtos/").send();
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retonar um 200 no PUT /produtos/id", async function(){
    const response = await request.put("/produtos/1")
    .json({"nome": "Uva verder", "preco": 10.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retonar um 404 no PUT /produtos/100", async function(){
    const response = await request.put("/produtos/100") 
    .send({});
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/); 
});

test("Deve retornar um 204 no DELETE /produtos/id", async function(){
    const response = await request.delete("/produtos/1")
    .send({});
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
});

test("Deve retornar 404 e um JSON no DELETE /produtos/id", async function (){    
    const response = await request.delete("/produtos/100")
    .json({});
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});