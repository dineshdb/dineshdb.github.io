/**
 * Utility function to render content from a collection
 * @param updates - Array of collection entries to render
 * @returns Array of rendered updates with content
 */
export async function renderUpdates<
  T extends { render(): Promise<{ Content: unknown }> },
>(
  updates: T[],
): Promise<
  Array<{
    update: T;
    content: T extends { render(): Promise<{ Content: infer U }> } ? U : never;
  }>
> {
  return await Promise.all(
    updates.map(async (update) => ({
      update,
      content: (await update.render()).Content,
    })),
  );
}
