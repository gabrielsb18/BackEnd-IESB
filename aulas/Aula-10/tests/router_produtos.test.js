const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

let id = null;

describe("API Loja Virtual", function(){
    test("Deve retornar 201 e um JSON array para o POST /produtos", async ()=>{
        const result = await request
        .post("/produtos")
        .send({
            nome: "banana",
            preco: 15
        });
        id = result.body._id.toString();
        expect(result.status).toBe(201);
        expect(result.type).toBe("application/json")

    });

    test("Deve retornar 422 e um JSON no POST /produtos", async ()=>{
        const result =  await request
        .post("/produtos")
        .send({});
        expect(result.status).toBe(422);
        expect(result.type).toBe("application/json");
    });

    test("Deve retornar 200 e um JSON array para o GET /produtos/id", async ()=>{
        const result = await request
        .get(`/produtos/${id}`);
        expect(result.status).toBe(200);
        expect(result.type).toBe("application/json");
    });

    test("Deve retornar 200 e um JSON para o GET /produtos/id", async ()=>{
        const result = await request
        .get(`/produtos/${id}`);
        expect(result.status).toBe(200);
        expect(result.type).toBe("application/json");
    });

    test("Deve retornar 404 e um JSON para o GET /produtos/id", async ()=>{
        const result = await request
        .get("/produtos/id");
        expect(result.status).toBe(404);
        expect(result.type).toBe("application/json");
    });

    test("Deve retornar 200 e um JSON para PUT /produtos/id", async () => {
        const result = await request.put(`/produtos/${id}`)
          .send({nome: "banana nanica", preco: 22.0});
        expect(result.status).toBe(200);
        expect(result.type).toBe("application/json");
    });

    test("Deve retornar 404 e um JSON no PUT /produtos/id", async ()=>{
        const result = await request
        .put("/produtos/id");
        expect(result.status).toBe(404);
        expect(result.type).toBe("application/json")
    });

    test("Deve retornar 422 e um JSON no PUT /produtos/id", async ()=>{
        const result = await request
        .put(`/produtos/${id}`);
        expect(result.status).toBe(422);
        expect(result.type).toBe("application/json")
    });

    test("Deve retornar 204 e um JSON para DELETE /produtos/id", async () => {
        const result = await request
          .delete(`/produtos/${id}`);
        expect(result.status).toBe(204);
        expect(result.type).toBe("");   
    });

    test("Deve retornar 404 e um JSON no DELETE /produtos/id", async ()=>{
        const result = await request
        .delete("/produtos/id");
        expect(result.status).toBe(404);
        expect(result.type).toBe("application/json") 
    });
});