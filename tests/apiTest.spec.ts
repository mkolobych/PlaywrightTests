import { test, expect } from "@playwright/test";

test("should return list of the users", async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users?page=2`);
    const responsJson = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responsJson.per_page).toBe(6);
    expect(responsJson.total).toBe(12);

    expect(responsJson.data.length).toBe(6);
    expect(responsJson.data[3].last_name).toBe("Fields");

    expect(await responsJson.data).toContainEqual(
        expect.objectContaining({
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        })
    );

    expect(responsJson.support).toMatchObject({
        url: expect.any(String),
        text: expect.any(String),
    });
});

test("check user creation", async ({ request }) => {
    const response = await request.post(`https://reqres.in/api/users`, {
        data: {
            name: "Ivan",
            job: "Ivanenco",
        },
    });
    const responsJson = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(201);

    expect(await responsJson.name).toBe("Ivan");
    expect(await responsJson.job).toBe("Ivanenco");

    expect(await responsJson).toHaveProperty('id');
    expect(await responsJson).toHaveProperty('createdAt');
});

test("put user", async ({ request }) => {
    const response = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "Marian",
            "job": "Kolobych"
        },
    });
    const responsJson = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responsJson).toMatchObject({
        name: "Marian",
        job: "Kolobych",
        updatedAt: expect.any(String),
    });

});

test("path user", async ({ request }) => {
    const response = await request.patch(`https://reqres.in/api/users/2`, {
        data: {
            "name": "Andriy",
            "job": "Pavliv"
        },
    });
    const responsJson = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(await responsJson.name).toBe("Andriy");
    expect(await responsJson.job).toBe("Pavliv");

    expect(await responsJson).toHaveProperty('updatedAt');
});

test("delete user", async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/2`);

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(204);

});
