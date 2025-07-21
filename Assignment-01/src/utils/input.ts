export  async function getUserInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    console.log(prompt);
    process.stdin.once("data", (data) => {
      resolve(data.toString().trim());
    });
  });
}
