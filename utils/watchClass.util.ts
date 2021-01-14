export function watchClass(targetNode: any, classToWatch: any){
  let lastClassState = targetNode.classList.contains(classToWatch);
  const observer = new MutationObserver(mutationsList => {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const currentClassState = mutation.target.classList.contains(
          classToWatch
        );
        if (lastClassState !== currentClassState) {
          lastClassState = currentClassState;
          if (!currentClassState) {
            mutation.target.classList.add("sortHandle");
          }
        }
      }
    }
  });
  observer.observe(targetNode, { attributes: true });
}
