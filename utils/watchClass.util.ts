// eslint-disable-next-line
export function watchClass(targetNode: any, classToWatch: any){
  let lastClassState = targetNode.classList.contains(classToWatch);
  const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        // @ts-ignore
        const currentClassState = mutation.target.classList.contains(
          classToWatch
        );
        if (lastClassState !== currentClassState) {
          lastClassState = currentClassState;
          if (!currentClassState) {
            // @ts-ignore
            mutation.target.classList.add("sortHandle");
          }
        }
      }
    })
  });
  observer.observe(targetNode, { attributes: true });
}
