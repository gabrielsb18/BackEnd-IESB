const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("Teste da API Produtos", function () {
    test("Deve retornar 201 no POST", async function () {
      const novo = { nome: "uva", preco: 18.0 };
      const response = await request.post("/produtos").send(novo);
      expect(response.status).toBe(201);
      expect(response.type).toBe("application/json");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome", novo.nome);
      expect(response.body).toHaveProperty("preco", novo.preco);
    });
});

test("Deve retornar 422 no POST", async function () {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg",
      "Nome e preco são obrigatórios");
});

test("Deve retornar um 200 no GET /produtos", async function () {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar 200 um objeto JSON", async function () {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("preco");
});

test("Deve retonar um 404 no GET /produtos/100", async function(){
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("msg", "Produto não encontrado")
});

test("Deve retornar um 200 no PUT produtos/1", async function(){
    const atual = {nome: "uva globo", preco: 20.0};
    const response = await request.put("/produtos/1").send(atual);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome", atual.nome);
    expect(response.body).toHaveProperty("preco", atual.preco);
});

test("Deve retornar um 404 no PUT no /produtos/100", async function(){
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json")
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});

test("Deve retornar um 204 sem corpo no DELETE", async function (){
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
    expect(response.body).toEqual({});
});

test("Deve retornar um 404 no DELETE", async function(){
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
});