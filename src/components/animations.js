export const fadeInFastStagger = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.05
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        },
        exitBeforeEnter: true
    }
};

export const fadeInSlowerNoStagger = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        },
        exitBeforeEnter: true
    }
};

export const flyUp = {
    initial: {
        y: 100,
        opacity: 0
    },

    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    
}
