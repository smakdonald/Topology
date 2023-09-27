var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book (*)",
  "body": "How to Use This Book (*)  I'm still in the process of figuring out exactly what this is for.   Future lecture notes for the hopeful possibility that one day I am teaching a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks    Definition  These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples  Specific instances of a definition.   Theorem  A result.   Lemma  A more technical result used specifically in the proof of a larger result.   Corollary  An important result whose proof comes directly from a previous theorem.   Proposition  Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration  Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem  Used for qualifying exam problems.   Remark  Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Discussion  Usually for arguing about notation.   Context  Historical and etymogical origins.   Footnotes  Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-6",
  "level": "2",
  "url": "preface-1.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Discussion Context Footnotes "
},
{
  "id": "sec-overview",
  "level": "1",
  "url": "sec-overview.html",
  "type": "Section",
  "number": "1.1",
  "title": "Overview of the course",
  "body": "Overview of the course  Spaces we live in - Euclidean room, spherical world, hyperbolic universe Describe these spaces without \"distance\" When does calculus, and in particular the Extreme Value Theorem, apply to these spaces?  "
},
{
  "id": "sec-sets-functions",
  "level": "1",
  "url": "sec-sets-functions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Useful tools on sets and functions",
  "body": "Useful tools on sets and functions  Properties of Sets  Distributive laws    and     De Morgan's laws    and     Template to prove two sets are equal  Power Set   The power set  of a set is the set of all subsets of .    Discussion of standard mathematical conventions for notation Notation for indices: for finite or countably many indices, for arbitrarily many indices. Notation for sets, elements of sets, and sets of sets: Small letters for elements of sets, capital letters for sets, calligraphic capital letters for collections of sets.   Properties of functions    For a function , the set is the domain , the set is the codomain .    Template to define a function  Template to prove two functions are equal    A function is well-defined if whenever and , then .     All functions are well-defined.     Let be a function. The function is one-to-one (also called an injection and denoted ) if whenever and then . The function is onto (also called a surjection and denoted ) if for every in , there is an in with . The function is a bijection if is both one-to-one and onto. The function is invertible if there is a function such that and .      Let , and be functions. Then:   If and are one-to-one then ba is one-to-one.    If is one-to-one then a is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.            Let be a function. The image of a subset of is . The preimage of a subset of is . The image of is .       PAN = Preimages are nice   If , , and for all , then    .     .     .     .       IASN = Images are sometimes nice   If , and , then    .     .     . If moreover is injective, then .     . If moreover f is injective, then .         Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .        Constructions of new sets from old ones, and the associated functions  Subsets    Let be a set. A subset of is a set of some (possibly none, possibly all, possibly neither) of the elements of .      Let . The inclusion map is the function defined by for all .      If and is the inclusion, then is an injection.     Product sets    Let , and for all be sets. The Cartesian product  .      Let for all be sets and let in . The projection map  is defined by .      Let for all be sets, let , and for each , let . The associated product inclusion map  is defined for each by , where and .         Projection maps are surjections.    Product inclusion maps are injections.         If and , then .      Axiom of Choice: If for all , then .     Quotient sets and equivalence relations    An equivalence relation  on a set is a subset of (where is written ) that satisfies the following for all in :    (reflexive),     implies (symmetric), and     and implies (transitive).   The equivalence class of an element of is . The notation denotes the set of equivalence classes, also called the quotient of with respect to . The function defined by for all is called the equivalence map .      A partition of a set is a collection of nonempty disjoint subsets of whose union is .      Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .               Let be a function, and let . Then is an equivalence relation on .    FBT = Function Building Theorem for quotient sets   Let be an equivalence relation on a set , and let be a function satisfying the property that whenever and then . Then:   There is a well-defined function defined by for all in ; that is, , where is the equivalence map.    If is onto, then is onto.    If also satisfies the property that whenever and then , then is one-to-one.       Template for proving a well-defined function with domain .          Let be a set and let be a subset of . The equivalence relation on generated by  is the intersection of all of the equivalence relations on that contain .      Cardinality    A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of . A set is infinite if is not finite. A set is countable if there is an injection .      Let be a set. (1) The following are equivalent: (1a) is finite. (1b) There is an onto function for some . (1c) There is a one-to-one function for some . (2) The following are equivalent: (2a) is infinite. (2b) There is an onto function . (2c) There is a one-to-one function . (3) The following are equivalent: (3a) is countable. (3b) There is an onto function . (3c) There is an injection .         The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.              Upper and lower bound properties of ℕ and ℝ       An upper bound for a subset is a real number satisfying for all .    A lower bound for a subset is a real number satisfying for all .            (Least upper bound property of ): If and has an upper bound, then has a least upper bound.    (Greatest lower bound property of ): If and has a lower bound, then has a greatest lower bound.         (Archimedean property of ): has no upper bound in .     "
},
{
  "id": "thm-1.1",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.1",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Distributive laws.",
  "body": "Distributive laws    and    "
},
{
  "id": "thm-1.2",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.2",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "De Morgan's laws.",
  "body": "De Morgan's laws    and    "
},
{
  "id": "def-1.3",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.3",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Power Set.",
  "body": "Power Set   The power set  of a set is the set of all subsets of .   "
},
{
  "id": "def-1.6",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.6",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  For a function , the set is the domain , the set is the codomain .   "
},
{
  "id": "def-1.7",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.7",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  A function is well-defined if whenever and , then .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-sets-functions.html#remark-1",
  "type": "Remark",
  "number": "1.2.6",
  "title": "",
  "body": " All functions are well-defined.  "
},
{
  "id": "def-1.8",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.8",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Let be a function. The function is one-to-one (also called an injection and denoted ) if whenever and then . The function is onto (also called a surjection and denoted ) if for every in , there is an in with . The function is a bijection if is both one-to-one and onto. The function is invertible if there is a function such that and .   "
},
{
  "id": "thm-1.9",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.9",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "",
  "body": "  Let , and be functions. Then:   If and are one-to-one then ba is one-to-one.    If is one-to-one then a is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-sets-functions.html#example-1",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  "
},
{
  "id": "def-1.10",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.10",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "  Let be a function. The image of a subset of is . The preimage of a subset of is . The image of is .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-sets-functions.html#example-2",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  "
},
{
  "id": "thm-pan",
  "level": "2",
  "url": "sec-sets-functions.html#thm-pan",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "PAN = “Preimages are nice”.",
  "body": "PAN = Preimages are nice   If , , and for all , then    .     .     .     .      "
},
{
  "id": "thm-iasn",
  "level": "2",
  "url": "sec-sets-functions.html#thm-iasn",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "IASN = “Images are sometimes nice”.",
  "body": "IASN = Images are sometimes nice   If , and , then    .     .     . If moreover is injective, then .     . If moreover f is injective, then .      "
},
{
  "id": "thm-1.13",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.13",
  "type": "Theorem",
  "number": "1.2.14",
  "title": "",
  "body": "  Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .      "
},
{
  "id": "def-1.15",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.15",
  "type": "Definition",
  "number": "1.2.15",
  "title": "",
  "body": "  Let be a set. A subset of is a set of some (possibly none, possibly all, possibly neither) of the elements of .   "
},
{
  "id": "def-1.16",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.16",
  "type": "Definition",
  "number": "1.2.16",
  "title": "",
  "body": "  Let . The inclusion map is the function defined by for all .   "
},
{
  "id": "prop-1.17",
  "level": "2",
  "url": "sec-sets-functions.html#prop-1.17",
  "type": "Proposition",
  "number": "1.2.17",
  "title": "",
  "body": "  If and is the inclusion, then is an injection.   "
},
{
  "id": "def-1.20",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.20",
  "type": "Definition",
  "number": "1.2.18",
  "title": "",
  "body": "  Let , and for all be sets. The Cartesian product  .   "
},
{
  "id": "def-1.21",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.21",
  "type": "Definition",
  "number": "1.2.19",
  "title": "",
  "body": "  Let for all be sets and let in . The projection map  is defined by .   "
},
{
  "id": "def-1.22",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.22",
  "type": "Definition",
  "number": "1.2.20",
  "title": "",
  "body": "  Let for all be sets, let , and for each , let . The associated product inclusion map  is defined for each by , where and .   "
},
{
  "id": "thm-1.23",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.23",
  "type": "Theorem",
  "number": "1.2.21",
  "title": "",
  "body": "     Projection maps are surjections.    Product inclusion maps are injections.      "
},
{
  "id": "lem-1.24",
  "level": "2",
  "url": "sec-sets-functions.html#lem-1.24",
  "type": "Lemma",
  "number": "1.2.22",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "axiom-choice",
  "level": "2",
  "url": "sec-sets-functions.html#axiom-choice",
  "type": "Axiom",
  "number": "1.2.23",
  "title": "",
  "body": "  Axiom of Choice: If for all , then .   "
},
{
  "id": "def-1.27",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.27",
  "type": "Definition",
  "number": "1.2.24",
  "title": "",
  "body": "  An equivalence relation  on a set is a subset of (where is written ) that satisfies the following for all in :    (reflexive),     implies (symmetric), and     and implies (transitive).   The equivalence class of an element of is . The notation denotes the set of equivalence classes, also called the quotient of with respect to . The function defined by for all is called the equivalence map .   "
},
{
  "id": "def-1.28",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.28",
  "type": "Definition",
  "number": "1.2.25",
  "title": "",
  "body": "  A partition of a set is a collection of nonempty disjoint subsets of whose union is .   "
},
{
  "id": "prop-1.29",
  "level": "2",
  "url": "sec-sets-functions.html#prop-1.29",
  "type": "Proposition",
  "number": "1.2.26",
  "title": "",
  "body": "  Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .      "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-sets-functions.html#example-3",
  "type": "Example",
  "number": "1.2.27",
  "title": "",
  "body": "     "
},
{
  "id": "thm-1.30",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.30",
  "type": "Theorem",
  "number": "1.2.28",
  "title": "",
  "body": "  Let be a function, and let . Then is an equivalence relation on .   "
},
{
  "id": "thm-1.31",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.31",
  "type": "Theorem",
  "number": "1.2.29",
  "title": "FBT = Function Building Theorem for quotient sets.",
  "body": "FBT = Function Building Theorem for quotient sets   Let be an equivalence relation on a set , and let be a function satisfying the property that whenever and then . Then:   There is a well-defined function defined by for all in ; that is, , where is the equivalence map.    If is onto, then is onto.    If also satisfies the property that whenever and then , then is one-to-one.      "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-sets-functions.html#example-4",
  "type": "Example",
  "number": "1.2.30",
  "title": "",
  "body": "     "
},
{
  "id": "def-1.32",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.32",
  "type": "Definition",
  "number": "1.2.31",
  "title": "",
  "body": "  Let be a set and let be a subset of . The equivalence relation on generated by  is the intersection of all of the equivalence relations on that contain .   "
},
{
  "id": "def-1.34",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.34",
  "type": "Definition",
  "number": "1.2.32",
  "title": "",
  "body": "  A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of . A set is infinite if is not finite. A set is countable if there is an injection .   "
},
{
  "id": "thm-1.35",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.35",
  "type": "Theorem",
  "number": "1.2.33",
  "title": "",
  "body": "  Let be a set. (1) The following are equivalent: (1a) is finite. (1b) There is an onto function for some . (1c) There is a one-to-one function for some . (2) The following are equivalent: (2a) is infinite. (2b) There is an onto function . (2c) There is a one-to-one function . (3) The following are equivalent: (3a) is countable. (3b) There is an onto function . (3c) There is an injection .   "
},
{
  "id": "thm-1.36",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.36",
  "type": "Theorem",
  "number": "1.2.34",
  "title": "",
  "body": "     The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.      "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-sets-functions.html#example-5",
  "type": "Example",
  "number": "1.2.35",
  "title": "",
  "body": "     "
},
{
  "id": "def-1.39",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.39",
  "type": "Definition",
  "number": "1.2.36",
  "title": "",
  "body": "     An upper bound for a subset is a real number satisfying for all .    A lower bound for a subset is a real number satisfying for all .      "
},
{
  "id": "def-1.40",
  "level": "2",
  "url": "sec-sets-functions.html#def-1.40",
  "type": "Definition",
  "number": "1.2.37",
  "title": "",
  "body": "     (Least upper bound property of ): If and has an upper bound, then has a least upper bound.    (Greatest lower bound property of ): If and has a lower bound, then has a greatest lower bound.      "
},
{
  "id": "thm-1.41",
  "level": "2",
  "url": "sec-sets-functions.html#thm-1.41",
  "type": "Theorem",
  "number": "1.2.38",
  "title": "",
  "body": "  (Archimedean property of ): has no upper bound in .   "
},
{
  "id": "sec-topology",
  "level": "1",
  "url": "sec-topology.html",
  "type": "Section",
  "number": "2.1",
  "title": "Topology and continuity",
  "body": "Topology and continuity  Topology    A topology on a set is a collection of subsets of satisfying:    and are elements of ;    whenever is in for all , then is in ; and    whenever are in , then is in .         A topological space is a set together with a topology on , often denoted . The elements of are called points in , and the elements of are called open sets in or open sets relative to or open sets rel .      Examples of topologies and topological spaces:   Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on , where is the ball of radius centered at q (and is Euclidean distance).    Euclidean topology relative to a subset .    Finite complement topology on a set .    Included point topology on a set with included point .    Excluded point topology on a set with excluded point .    Infinite ray topology on .    Preimage topology constructed on a set from a function and a topology on .    Line with two origins with set and topology .    On the finite set .         All of the examples in are topologies.      Let and be topologies on a set . If , then the topology is called smaller or coarser than , and the topology is called larger or finer than .     Continuity  Motivation: Unraveling the definition of continuous in Euclidean space to an equivalent definition on open sets.    Let and be topological spaces, and let be a function. The function is continuous if and only if for every open set in , the preimage is open in .     Examples     (CC0)   Let be a real number. The function defined by for all is continuous.    The functions from to defined by addition, subtraction, and multiplication are continuous.    The function defined by is continuous.    A uniform limit of continuous functions from to is continuous; hence sine and cosine are continuous.            (CC1) If and are topological spaces and is a constant function, then is continuous.    (CC2) If and are continuous, then the composition is continuous.         Let and be topological spaces and let . The function is continuous iff for all and , there exist with and .      Let and be topological spaces. A function is a homeomorphism if is a continuous bijection and is also continuous. The spaces and are called homeomorphic, or topologically equivalent, if there is a homeomorphism from to ; in symbols this is written .      \"Homeomorphic\" is an equivalence relation on topological spaces.     Examples   Big picture:  Euclidean, spherical and hyperbolic metric spaces of the same dimension are homeomorphic. .    The Homeomorphism Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?    (Backing up a step: How do you input a space into a computer?!)    Bases    A basis on a set is a collection of subsets of satisfying:   For each in there is an in such that , and    whenever are in and is an element of , then there is an in such that .         The topology generated by a basis is .         If is a basis on , then is a topology on .    If is a topology on , then is also a basis on , and .         If is a basis on and , then is in if and only if is a union of elements of . That is, .     The Euclidean basis on is .      .      The lower limit topology on the set is the topology generated by the basis .      Let be a basis on a set . A function is continuous if and only if for every basis element , the preimage is open in .      Let and be bases on a set . Then iff for all in and in , there is an in with .      A subbasis on a set is a collection of subsets of satisfying .      The basis generated by a subbasis 𝒮 is ℬ(𝒮) := \\{∩i=1n Ui | n ∈ ℕ and Ui ∈ 𝒮 for all i\\}. The topology generated by a subbasis 𝒮 is 𝒯(𝒮) := 𝒯(ℬ(𝒮)).      Let 𝒮Y be a subbasis on a set Y. (a) The basis ℬ(𝒮Y) generated by the subbasis 𝒮Y is a basis, and hence the topology 𝒯(𝒮Y) generated by the subbasis 𝒮Y is a topology. (b) A function f: (X,𝒯X) → (Y,𝒯(𝒮Y)) is continuous if and only if for every subbasis element V ∈ 𝒮Y, the preimage f-1(V) is open in X.     "
},
{
  "id": "def-2.1",
  "level": "2",
  "url": "sec-topology.html#def-2.1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A topology on a set is a collection of subsets of satisfying:    and are elements of ;    whenever is in for all , then is in ; and    whenever are in , then is in .      "
},
{
  "id": "def-2.2",
  "level": "2",
  "url": "sec-topology.html#def-2.2",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  A topological space is a set together with a topology on , often denoted . The elements of are called points in , and the elements of are called open sets in or open sets relative to or open sets rel .   "
},
{
  "id": "def-2.6",
  "level": "2",
  "url": "sec-topology.html#def-2.6",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Examples of topologies and topological spaces:   Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on , where is the ball of radius centered at q (and is Euclidean distance).    Euclidean topology relative to a subset .    Finite complement topology on a set .    Included point topology on a set with included point .    Excluded point topology on a set with excluded point .    Infinite ray topology on .    Preimage topology constructed on a set from a function and a topology on .    Line with two origins with set and topology .    On the finite set .      "
},
{
  "id": "lem-2.7",
  "level": "2",
  "url": "sec-topology.html#lem-2.7",
  "type": "Lemma",
  "number": "2.1.4",
  "title": "",
  "body": "  All of the examples in are topologies.   "
},
{
  "id": "def-2.9",
  "level": "2",
  "url": "sec-topology.html#def-2.9",
  "type": "Definition",
  "number": "2.1.5",
  "title": "",
  "body": "  Let and be topologies on a set . If , then the topology is called smaller or coarser than , and the topology is called larger or finer than .   "
},
{
  "id": "def-2.20",
  "level": "2",
  "url": "sec-topology.html#def-2.20",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "  Let and be topological spaces, and let be a function. The function is continuous if and only if for every open set in , the preimage is open in .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-topology.html#example-7",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.21",
  "level": "2",
  "url": "sec-topology.html#thm-2.21",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "  (CC0)   Let be a real number. The function defined by for all is continuous.    The functions from to defined by addition, subtraction, and multiplication are continuous.    The function defined by is continuous.    A uniform limit of continuous functions from to is continuous; hence sine and cosine are continuous.      "
},
{
  "id": "thm-2.22",
  "level": "2",
  "url": "sec-topology.html#thm-2.22",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "",
  "body": "     (CC1) If and are topological spaces and is a constant function, then is continuous.    (CC2) If and are continuous, then the composition is continuous.      "
},
{
  "id": "thm-2.23",
  "level": "2",
  "url": "sec-topology.html#thm-2.23",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "",
  "body": "  Let and be topological spaces and let . The function is continuous iff for all and , there exist with and .   "
},
{
  "id": "def-2.25",
  "level": "2",
  "url": "sec-topology.html#def-2.25",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": "  Let and be topological spaces. A function is a homeomorphism if is a continuous bijection and is also continuous. The spaces and are called homeomorphic, or topologically equivalent, if there is a homeomorphism from to ; in symbols this is written .   "
},
{
  "id": "thm-2.26",
  "level": "2",
  "url": "sec-topology.html#thm-2.26",
  "type": "Theorem",
  "number": "2.1.12",
  "title": "",
  "body": "  \"Homeomorphic\" is an equivalence relation on topological spaces.   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-topology.html#example-8",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-2.28",
  "level": "2",
  "url": "sec-topology.html#def-2.28",
  "type": "Definition",
  "number": "2.1.14",
  "title": "",
  "body": "  The Homeomorphism Problem asks: Is there a computer algorithm that, upon input of two topological spaces and , can determine whether or not ?   "
},
{
  "id": "def-2.30",
  "level": "2",
  "url": "sec-topology.html#def-2.30",
  "type": "Definition",
  "number": "2.1.15",
  "title": "",
  "body": "  A basis on a set is a collection of subsets of satisfying:   For each in there is an in such that , and    whenever are in and is an element of , then there is an in such that .      "
},
{
  "id": "def-2.31",
  "level": "2",
  "url": "sec-topology.html#def-2.31",
  "type": "Definition",
  "number": "2.1.16",
  "title": "",
  "body": "  The topology generated by a basis is .   "
},
{
  "id": "lem-2.32",
  "level": "2",
  "url": "sec-topology.html#lem-2.32",
  "type": "Lemma",
  "number": "2.1.17",
  "title": "",
  "body": "     If is a basis on , then is a topology on .    If is a topology on , then is also a basis on , and .      "
},
{
  "id": "thm-2.33",
  "level": "2",
  "url": "sec-topology.html#thm-2.33",
  "type": "Theorem",
  "number": "2.1.18",
  "title": "",
  "body": "  If is a basis on and , then is in if and only if is a union of elements of . That is, .   "
},
{
  "id": "def-2.36",
  "level": "2",
  "url": "sec-topology.html#def-2.36",
  "type": "Example",
  "number": "2.1.19",
  "title": "",
  "body": " The Euclidean basis on is .  "
},
{
  "id": "lem-2.37",
  "level": "2",
  "url": "sec-topology.html#lem-2.37",
  "type": "Lemma",
  "number": "2.1.20",
  "title": "",
  "body": "   .   "
},
{
  "id": "def-2.39",
  "level": "2",
  "url": "sec-topology.html#def-2.39",
  "type": "Definition",
  "number": "2.1.21",
  "title": "",
  "body": "  The lower limit topology on the set is the topology generated by the basis .   "
},
{
  "id": "thm-2.40",
  "level": "2",
  "url": "sec-topology.html#thm-2.40",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "",
  "body": "  Let be a basis on a set . A function is continuous if and only if for every basis element , the preimage is open in .   "
},
{
  "id": "thm-2.42",
  "level": "2",
  "url": "sec-topology.html#thm-2.42",
  "type": "Theorem",
  "number": "2.1.23",
  "title": "",
  "body": "  Let and be bases on a set . Then iff for all in and in , there is an in with .   "
},
{
  "id": "thm-2.44",
  "level": "2",
  "url": "sec-topology.html#thm-2.44",
  "type": "Theorem",
  "number": "2.1.24",
  "title": "",
  "body": "  A subbasis on a set is a collection of subsets of satisfying .   "
},
{
  "id": "thm-2.45",
  "level": "2",
  "url": "sec-topology.html#thm-2.45",
  "type": "Theorem",
  "number": "2.1.25",
  "title": "",
  "body": "  The basis generated by a subbasis 𝒮 is ℬ(𝒮) := \\{∩i=1n Ui | n ∈ ℕ and Ui ∈ 𝒮 for all i\\}. The topology generated by a subbasis 𝒮 is 𝒯(𝒮) := 𝒯(ℬ(𝒮)).   "
},
{
  "id": "thm-2.46",
  "level": "2",
  "url": "sec-topology.html#thm-2.46",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "",
  "body": "  Let 𝒮Y be a subbasis on a set Y. (a) The basis ℬ(𝒮Y) generated by the subbasis 𝒮Y is a basis, and hence the topology 𝒯(𝒮Y) generated by the subbasis 𝒮Y is a topology. (b) A function f: (X,𝒯X) → (Y,𝒯(𝒮Y)) is continuous if and only if for every subbasis element V ∈ 𝒮Y, the preimage f-1(V) is open in X.   "
},
{
  "id": "sec-constructions",
  "level": "1",
  "url": "sec-constructions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructing new spaces and continuous functions from old ones",
  "body": "Constructing new spaces and continuous functions from old ones  Subspaces    Let X be a topological space and let A be a subset of X. The subspace topology on A is 𝒯sub := \\{U ∩ A | U is an open set in X\\}. The set A with the subspace topology is called a subspace of X. An element V of the subspace topology on A is called open in A or open set relative to A or open rel A.     (a) \"Open in A\" does not mean open and contained in A. (b) In mathematical writing, always specify \"open in __\", never write just \"open\".     The subspace topology is a topology.      (CC3) If A is a subspace of X, then the inclusion map i:A → X is continuous.      Examples      If A is a subspace of B and B is a subspace of C then A is a subspace of C.      Given a topological space X with topology 𝒯(ℬ) generated by a basis ℬ, and given and Y ⊆ X, the subspace topology on Y equals the topology generated by the basis ℬsub = \\{ B ∩ Y | B ∈ ℬ \\}.      Let X and Y be sets, let A be a subset of X, let Z be a set containing Y, and let f:X → Y be a function. The restriction of f to the domain A is the function f|A:A → Y defined by f|A(a) := f(a) for all a ∈ A. The extension of f to the codomain Z is f|Z:X → Z defined by f|Z(p) := f(p) for all p ∈ X. If B is a subset of Y containing the image f(X) of f, then the restriction of f to the codomain B is the function f|B:X → B defined by f|B(p) := f(p) for all p ∈ X.      Restrictions and extensions of continuous functions are continuous. That is: Let X and Y be topological spaces, let A be a subspace of X, and let B be a subspace of Y. (CC4) The inclusion i: A → X is continuous. (CC5) If f: X → Y is continuous, then f|A: A → Y is continuous. (CC6) If f: X → Y is continuous and f(X) ⊆ B, then f|B: X → B is continuous. (CC7) If f: X → B is continuous then f|Y: X → Y is continuous.      (CC8) Let X be a topological space and suppose that X = ∪α Uα with each Uα open in X. Let each Uα have the subspace topology from X. If f: X → Y is a function satisfying f|Uα: Uα → Y is continuous for all α, then f is continuous.      An imbedding of a topological space X in a topological space Y is a map f:X → Y such that the restriction f|f(X):X → f(X) of f to the codomain f(X), with the subspace topology on f(X) from Y, is a homeomorphism.      If A is a subspace of X, then the inclusion map i:A → Xis an imbedding.      Examples of homeomorphic Euclidean subspaces     Product spaces    Let (Xα,𝒯α) be a topological space for each index α ∈ J, and let ∏α Xα be the Cartesian product of the spaces Xα. For each index β, let pβ: ∏α Xα → Xβ be the projection map. (a) The product topology on ∏α Xα is the topology 𝒯prod := 𝒯(𝒮prod) generated by the product subbasis 𝒮prod := \\{ pβ-1(Uβ) | β ∈ J and Uβ ∈ 𝒯β \\}. The set ∏α Xα with the product topology is called a product space. (b) The box topology on ∏α Xα is the topology 𝒯box := 𝒯(ℬbox) generated by the box basis ℬbox := \\{∏α Uα | Uα is open in Xα for all indices α\\}.      (a) The product subbasis is a subbasis. (b) The box basis is a basis. (c) For a collection of spaces (Xα,𝒯α) for α ∈ J, 𝒯prod ⊆ 𝒯box; and if J is finite then 𝒯prod = 𝒯box.      For a collection of spaces (Xα,𝒯α) the product topology on ∏ Xα equals the product generated by the basis ℬprod = \\{ ∏ Bα | Bα ∈ 𝒯α for all α, and Bα = Xα for all but finitely many α \\}. (The collection ℬprod is called the product basis.)      (CC9) Let Xα be a topological space for each index α, and let ∏α Xα have the product topology. Then for each index β, the projection map pβ: ∏α Xα → Xβ is continuous.      Examples      Let X = ℝn. Let 𝒯Eucl be the Euclidean topology on X, and let 𝒯prod be the product topology on X induced by the Euclidean topology on each of the ℝ1 factors. Then 𝒯Eucl = 𝒯prod.      (CC10) Let Xα be a topological space for each index α in an index set J, and let ∏α Xα have the product topology. Let β ∈ J, and for each α ∈ J - \\{β\\}, let pα be an (particular choice of) element of Xα. Then the associated product inclusion map iβ: Xβ → ∏α Xα is an imbedding.      Let A be a set, and for each α in an index set J let Xα be a set and let fα:A → Xα. The product function (fα)α ∈ J: A → ∏ Xα is defined by (fα)α ∈ J(a) := (fα(a))α ∈ J for all a ∈ A.      Let A be a set, and for each α let Xα be a set. Then: (a) Each function f: A → ∏ Xα is a product function f = (fα)α such that fα: A → Xα is defined by fα := pα ∘ f for each index α. (b) Given functions gα:A → Xα for each α in J, the product function g := (gα)α ∈ J satisfies gα = pα ∘ g for all α.      (CC11) Let A be a topological space, and for each index α let Xα be a topological space. Let ∏ Xα have the product topology and let f: A → ∏ Xα. Then f is continuous if and only if pα ∘ f is continuous for all α.      Let Aα be a subspace of a space Xα for all α. Let 𝒯prod be the product topology on ∏α Aα. Let 𝒯sub be the subspace topology on ∏α Aα induced by the product topology on ∏α Xα. Then 𝒯prod = 𝒯sub.     Quotient = identification spaces    Def 2.90: Let X be a topological space and let ∼ be an equivalence relation on X. Let X\/∼ be the set of equivalence classes and let q: X → X\/∼ be the equivalence map (defined by q(p) := [p] for all p in X). The quotient topology, or identification topology on X\/∼ induced by ∼, is the topology 𝒯∼ = 𝒯quo:= \\{U ⊆ X\/∼ | q -1(U) is open in X\\}. The set X\/∼ together with the quotient topology is called a quotient space of X, and the equivalence map q is called the quotient map induced by ∼.      Prop 2.92: The quotient topology is a topology.      Prop 2.93: (CC12-i) If X\/∼ is a quotient space of X and q: X → X\/∼ is the equivalence map (defined by q(p) := [p] for all p in X), then q is a continuous surjection. (b) The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.      Def 2.95: Let (X,𝒯X) be a topological space, let Y be a set, and let f:X → Y be a surjective function. The quotient topology on Y induced by f is 𝒯q := \\{V ⊆ Y | f-1(V) ∈ 𝒯X\\}. If Y has the quotient topology induced by f then f is called a quotient map.      The quotient topology induced by a function f is a topology.      (CC12-ii) If f is a quotient map, then f is a continuous surjection. (b) The quotient topology induced by a map f is the largest topology on the codomain of f for which the map f is continuous.      Let X be a topological space. (a) If ∼ is an equivalence relation on X, then the quotient topology on X\/∼ induced by ∼ equals the quotient topology on X\/∼ induced by the equivalence map q:X → X\/∼ (defined by q(p) := [p] for all p in X). (b) If f:X → Y is a surjection, then the quotient space (Y,𝒯f) is homeomorphic to the quotient space (X\/∼,𝒯∼) induced by the equivalence relation on X defined by x ∼ x' if and only if f(x) = f(x') for all x,x' ∈ X; moreover, the homeomorphism g:X\/∼ → Y satisfies g ∘ q = f, where q is the equivalence map.      Examples        1-dimensional examples: Quotients of a line segment [0,1]:    Let X = [0,1] have the Euclidean subspace topology, and let ∼ be the equivalence relation on X defined by p ∼ q if and only if either [p=q] or [\\{p,q\\} = \\{0,1\\}]. Then the quotient space X\/∼ is isomorphic to S1.    2-dimensional (surface) examples: Quotients of the square [0,1] × [0,1]:    Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The torus T2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,s) for all r,s ∈ [0,1].      The Klein bottle K2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,1-s) for all r,s ∈ [0,1].      The Mobius band M2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (0,s) ∼ (1,1-s) for all s ∈ [0,1].         The projective plane P2 is the quotient space P2 := S2\/∼ where S2 := \\{(x,y,z) ∈ ℝ3 | x2 + y2 + z2 = 1\\} is the 2-sphere (with the Euclidean subspace topology) and ∼ is the equivalence relation generated by (x,y,z) ∼ (-x,-y,-z) for all (x,y,z) ∈ S2.      Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The cylinder S1 × [0,1] is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1,r) for all r ∈ [0,1].    The projective plane P2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) and (0,1-s) ∼ (1,s) for all r,s ∈ [0,1].    The 2-sphere S2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (0,r) and (s,1) ∼ (1,s) for all r,s ∈ [0,1].    The torus T2 is homeomorphic to the product space S1 × S1 where each S1 has the Euclidean subspace topology.         (CC13 and CQ1) (CFBT = \"Continuous Function Building Theorem for quotient spaces\"): Let X and Z be topological spaces, let ∼ be an equivalence relation on X, let q: X \\to X\/∼ be the equivalence map, and let X\/∼ have the quotient topology. Suppose that f: X \\to Z is a continuous function that is constant on equivalence classes. Then: (1) The map f induces a continuous function g: X\/∼ \\to Z with g ∘ q = f. (2) If f is onto then g is onto. (2') If f is a quotient map, then g is a quotient map. (3) If [ f(x)=f(x') implies q(x)=q(x') for all x,x' ∈ X] then g is one-to-one. (4) If f is a quotient map and (3) holds then g is a homeomorphism.      Let X and Y be topological spaces. An open map from X to Y is a function f:X → Y such that for every open set V in X, the image f(V) is open in Y.      (CO1) (a) A composition of open functions is open. (b) (CO2) If Xα has the topology Tα for each α ∈ J, and ∏α ∈ J Xα has the product topology, then the projection map pβ : (∏α ∈ J Xα) → Xβ is open. (c) If f:X → Y is an open function and if B is a subspace of Y satisfying f(X) ⊆ B ⊆ Y, then f|B is an open map. (d) (CO3) A finite product of open maps is open.      (CQ2) If f: X → Z is continuous, onto, and open, then f is a quotient map.      There exist quotient maps that are not open maps.      A retraction of a topological space X to a subspace A is a continuous function r:X → A satisfying r(a) = a for all a ∈ A.      (CQ3) Every retraction is a quotient map.      Let (X,𝒯X) and (Y,𝒯Y) be topological spaces with X ∩ Y = ∅. The disjoint union topology on X ∪ Y is 𝒯∐ = \\{ U ∪ V | U ∈ 𝒯X and V ∈ 𝒯Y \\}.      Let X1 and X2 be disjoint topological spaces, let Ai be a subspace of Xi for each i, and let f : A1 → A2 be a continuous function. The disjoint union of X1 and X2 glued along f, denoted X1 ∐f X2 is defined to be the quotient of the disjoint union space X1 ∪ X2 associated to the the smallest equivalence relation ∼ such that a ∼ f(a) for all a in A1.      If Ai is a subspace of Xi for i = 1,2 and f : A1 → A2 is continuous, then the function g: X2 → X1 ∐f X2 defined by g(p) := [p] (for all p in X2) is an embedding.      Let Z be a topological space, let A be an open set in Z, and let ∼ be an equivalence relation on Z satisfying the property that for each a ∈ A, the equivalence class of a satisfies [a] = \\{a\\}. If A has the subspace topology and Z\/∼ has the quotient topology, then the function g: A → Z\/∼ defined by g(a) := [a] for all a ∈ A is an embedding.      Let X be a topological space, let ∼ be an equivalence relation on X, and let q:X → X\/∼ be the quotient map. Let A be a subspace of X and let q(A) have the subspace topology in X\/∼.   The relation ≈ on A defined by [a ≈ a' if and only if a ∼ a' for all a,a' ∈ A] is an equivalence relation on A.    If A = q-1(q(A)) and A is either an open or closed subset of X, then the the function q|Aq(A):A → q(A) is a quotient map and the function h: A\/≈ → q(A) defined by h([a]) := [h(a)] for all [a] ∈ A\/≈ is a homeomorphism.        "
},
{
  "id": "def-2.50",
  "level": "2",
  "url": "sec-constructions.html#def-2.50",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let X be a topological space and let A be a subset of X. The subspace topology on A is 𝒯sub := \\{U ∩ A | U is an open set in X\\}. The set A with the subspace topology is called a subspace of X. An element V of the subspace topology on A is called open in A or open set relative to A or open rel A.   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-constructions.html#remark-2",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " (a) \"Open in A\" does not mean open and contained in A. (b) In mathematical writing, always specify \"open in __\", never write just \"open\".  "
},
{
  "id": "prop-2.51",
  "level": "2",
  "url": "sec-constructions.html#prop-2.51",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  The subspace topology is a topology.   "
},
{
  "id": "thm-2.54",
  "level": "2",
  "url": "sec-constructions.html#thm-2.54",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  (CC3) If A is a subspace of X, then the inclusion map i:A → X is continuous.   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec-constructions.html#example-10",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Examples   "
},
{
  "id": "thm-2.56",
  "level": "2",
  "url": "sec-constructions.html#thm-2.56",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  If A is a subspace of B and B is a subspace of C then A is a subspace of C.   "
},
{
  "id": "prop-2.57",
  "level": "2",
  "url": "sec-constructions.html#prop-2.57",
  "type": "Proposition",
  "number": "2.2.7",
  "title": "",
  "body": "  Given a topological space X with topology 𝒯(ℬ) generated by a basis ℬ, and given and Y ⊆ X, the subspace topology on Y equals the topology generated by the basis ℬsub = \\{ B ∩ Y | B ∈ ℬ \\}.   "
},
{
  "id": "def-2.59",
  "level": "2",
  "url": "sec-constructions.html#def-2.59",
  "type": "Definition",
  "number": "2.2.8",
  "title": "",
  "body": "  Let X and Y be sets, let A be a subset of X, let Z be a set containing Y, and let f:X → Y be a function. The restriction of f to the domain A is the function f|A:A → Y defined by f|A(a) := f(a) for all a ∈ A. The extension of f to the codomain Z is f|Z:X → Z defined by f|Z(p) := f(p) for all p ∈ X. If B is a subset of Y containing the image f(X) of f, then the restriction of f to the codomain B is the function f|B:X → B defined by f|B(p) := f(p) for all p ∈ X.   "
},
{
  "id": "thm-2.60",
  "level": "2",
  "url": "sec-constructions.html#thm-2.60",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "",
  "body": "  Restrictions and extensions of continuous functions are continuous. That is: Let X and Y be topological spaces, let A be a subspace of X, and let B be a subspace of Y. (CC4) The inclusion i: A → X is continuous. (CC5) If f: X → Y is continuous, then f|A: A → Y is continuous. (CC6) If f: X → Y is continuous and f(X) ⊆ B, then f|B: X → B is continuous. (CC7) If f: X → B is continuous then f|Y: X → Y is continuous.   "
},
{
  "id": "thm-2.62",
  "level": "2",
  "url": "sec-constructions.html#thm-2.62",
  "type": "Theorem",
  "number": "2.2.10",
  "title": "",
  "body": "  (CC8) Let X be a topological space and suppose that X = ∪α Uα with each Uα open in X. Let each Uα have the subspace topology from X. If f: X → Y is a function satisfying f|Uα: Uα → Y is continuous for all α, then f is continuous.   "
},
{
  "id": "def-2.64",
  "level": "2",
  "url": "sec-constructions.html#def-2.64",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  An imbedding of a topological space X in a topological space Y is a map f:X → Y such that the restriction f|f(X):X → f(X) of f to the codomain f(X), with the subspace topology on f(X) from Y, is a homeomorphism.   "
},
{
  "id": "cor-2.65",
  "level": "2",
  "url": "sec-constructions.html#cor-2.65",
  "type": "Corollary",
  "number": "2.2.12",
  "title": "",
  "body": "  If A is a subspace of X, then the inclusion map i:A → Xis an imbedding.   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-constructions.html#example-11",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Examples of homeomorphic Euclidean subspaces   "
},
{
  "id": "def-2.70",
  "level": "2",
  "url": "sec-constructions.html#def-2.70",
  "type": "Definition",
  "number": "2.2.14",
  "title": "",
  "body": "  Let (Xα,𝒯α) be a topological space for each index α ∈ J, and let ∏α Xα be the Cartesian product of the spaces Xα. For each index β, let pβ: ∏α Xα → Xβ be the projection map. (a) The product topology on ∏α Xα is the topology 𝒯prod := 𝒯(𝒮prod) generated by the product subbasis 𝒮prod := \\{ pβ-1(Uβ) | β ∈ J and Uβ ∈ 𝒯β \\}. The set ∏α Xα with the product topology is called a product space. (b) The box topology on ∏α Xα is the topology 𝒯box := 𝒯(ℬbox) generated by the box basis ℬbox := \\{∏α Uα | Uα is open in Xα for all indices α\\}.   "
},
{
  "id": "prop-2.71",
  "level": "2",
  "url": "sec-constructions.html#prop-2.71",
  "type": "Proposition",
  "number": "2.2.15",
  "title": "",
  "body": "  (a) The product subbasis is a subbasis. (b) The box basis is a basis. (c) For a collection of spaces (Xα,𝒯α) for α ∈ J, 𝒯prod ⊆ 𝒯box; and if J is finite then 𝒯prod = 𝒯box.   "
},
{
  "id": "prop-2.73",
  "level": "2",
  "url": "sec-constructions.html#prop-2.73",
  "type": "Proposition",
  "number": "2.2.16",
  "title": "",
  "body": "  For a collection of spaces (Xα,𝒯α) the product topology on ∏ Xα equals the product generated by the basis ℬprod = \\{ ∏ Bα | Bα ∈ 𝒯α for all α, and Bα = Xα for all but finitely many α \\}. (The collection ℬprod is called the product basis.)   "
},
{
  "id": "prop-2.75",
  "level": "2",
  "url": "sec-constructions.html#prop-2.75",
  "type": "Proposition",
  "number": "2.2.17",
  "title": "",
  "body": "  (CC9) Let Xα be a topological space for each index α, and let ∏α Xα have the product topology. Then for each index β, the projection map pβ: ∏α Xα → Xβ is continuous.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-constructions.html#example-12",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Examples   "
},
{
  "id": "thm-2.78",
  "level": "2",
  "url": "sec-constructions.html#thm-2.78",
  "type": "Theorem",
  "number": "2.2.19",
  "title": "",
  "body": "  Let X = ℝn. Let 𝒯Eucl be the Euclidean topology on X, and let 𝒯prod be the product topology on X induced by the Euclidean topology on each of the ℝ1 factors. Then 𝒯Eucl = 𝒯prod.   "
},
{
  "id": "thm-2.80",
  "level": "2",
  "url": "sec-constructions.html#thm-2.80",
  "type": "Theorem",
  "number": "2.2.20",
  "title": "",
  "body": "  (CC10) Let Xα be a topological space for each index α in an index set J, and let ∏α Xα have the product topology. Let β ∈ J, and for each α ∈ J - \\{β\\}, let pα be an (particular choice of) element of Xα. Then the associated product inclusion map iβ: Xβ → ∏α Xα is an imbedding.   "
},
{
  "id": "def-2.82",
  "level": "2",
  "url": "sec-constructions.html#def-2.82",
  "type": "Definition",
  "number": "2.2.21",
  "title": "",
  "body": "  Let A be a set, and for each α in an index set J let Xα be a set and let fα:A → Xα. The product function (fα)α ∈ J: A → ∏ Xα is defined by (fα)α ∈ J(a) := (fα(a))α ∈ J for all a ∈ A.   "
},
{
  "id": "lem-2.83",
  "level": "2",
  "url": "sec-constructions.html#lem-2.83",
  "type": "Lemma",
  "number": "2.2.22",
  "title": "",
  "body": "  Let A be a set, and for each α let Xα be a set. Then: (a) Each function f: A → ∏ Xα is a product function f = (fα)α such that fα: A → Xα is defined by fα := pα ∘ f for each index α. (b) Given functions gα:A → Xα for each α in J, the product function g := (gα)α ∈ J satisfies gα = pα ∘ g for all α.   "
},
{
  "id": "thm-2.84",
  "level": "2",
  "url": "sec-constructions.html#thm-2.84",
  "type": "Theorem",
  "number": "2.2.23",
  "title": "",
  "body": "  (CC11) Let A be a topological space, and for each index α let Xα be a topological space. Let ∏ Xα have the product topology and let f: A → ∏ Xα. Then f is continuous if and only if pα ∘ f is continuous for all α.   "
},
{
  "id": "thm-2.87",
  "level": "2",
  "url": "sec-constructions.html#thm-2.87",
  "type": "Theorem",
  "number": "2.2.24",
  "title": "",
  "body": "  Let Aα be a subspace of a space Xα for all α. Let 𝒯prod be the product topology on ∏α Aα. Let 𝒯sub be the subspace topology on ∏α Aα induced by the product topology on ∏α Xα. Then 𝒯prod = 𝒯sub.   "
},
{
  "id": "def-2.90",
  "level": "2",
  "url": "sec-constructions.html#def-2.90",
  "type": "Definition",
  "number": "2.2.25",
  "title": "",
  "body": "  Def 2.90: Let X be a topological space and let ∼ be an equivalence relation on X. Let X\/∼ be the set of equivalence classes and let q: X → X\/∼ be the equivalence map (defined by q(p) := [p] for all p in X). The quotient topology, or identification topology on X\/∼ induced by ∼, is the topology 𝒯∼ = 𝒯quo:= \\{U ⊆ X\/∼ | q -1(U) is open in X\\}. The set X\/∼ together with the quotient topology is called a quotient space of X, and the equivalence map q is called the quotient map induced by ∼.   "
},
{
  "id": "prop-2.92",
  "level": "2",
  "url": "sec-constructions.html#prop-2.92",
  "type": "Proposition",
  "number": "2.2.26",
  "title": "",
  "body": "  Prop 2.92: The quotient topology is a topology.   "
},
{
  "id": "prop-2.93",
  "level": "2",
  "url": "sec-constructions.html#prop-2.93",
  "type": "Proposition",
  "number": "2.2.27",
  "title": "",
  "body": "  Prop 2.93: (CC12-i) If X\/∼ is a quotient space of X and q: X → X\/∼ is the equivalence map (defined by q(p) := [p] for all p in X), then q is a continuous surjection. (b) The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.   "
},
{
  "id": "def-2.95",
  "level": "2",
  "url": "sec-constructions.html#def-2.95",
  "type": "Definition",
  "number": "2.2.28",
  "title": "",
  "body": "  Def 2.95: Let (X,𝒯X) be a topological space, let Y be a set, and let f:X → Y be a surjective function. The quotient topology on Y induced by f is 𝒯q := \\{V ⊆ Y | f-1(V) ∈ 𝒯X\\}. If Y has the quotient topology induced by f then f is called a quotient map.   "
},
{
  "id": "prop-2.97",
  "level": "2",
  "url": "sec-constructions.html#prop-2.97",
  "type": "Proposition",
  "number": "2.2.29",
  "title": "",
  "body": "  The quotient topology induced by a function f is a topology.   "
},
{
  "id": "prop-2.98",
  "level": "2",
  "url": "sec-constructions.html#prop-2.98",
  "type": "Proposition",
  "number": "2.2.30",
  "title": "",
  "body": "  (CC12-ii) If f is a quotient map, then f is a continuous surjection. (b) The quotient topology induced by a map f is the largest topology on the codomain of f for which the map f is continuous.   "
},
{
  "id": "prop-2.100",
  "level": "2",
  "url": "sec-constructions.html#prop-2.100",
  "type": "Proposition",
  "number": "2.2.31",
  "title": "",
  "body": "  Let X be a topological space. (a) If ∼ is an equivalence relation on X, then the quotient topology on X\/∼ induced by ∼ equals the quotient topology on X\/∼ induced by the equivalence map q:X → X\/∼ (defined by q(p) := [p] for all p in X). (b) If f:X → Y is a surjection, then the quotient space (Y,𝒯f) is homeomorphic to the quotient space (X\/∼,𝒯∼) induced by the equivalence relation on X defined by x ∼ x' if and only if f(x) = f(x') for all x,x' ∈ X; moreover, the homeomorphism g:X\/∼ → Y satisfies g ∘ q = f, where q is the equivalence map.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-constructions.html#example-13",
  "type": "Example",
  "number": "2.2.32",
  "title": "",
  "body": "  Examples       "
},
{
  "id": "thm-2.104",
  "level": "2",
  "url": "sec-constructions.html#thm-2.104",
  "type": "Theorem",
  "number": "2.2.33",
  "title": "",
  "body": "  Let X = [0,1] have the Euclidean subspace topology, and let ∼ be the equivalence relation on X defined by p ∼ q if and only if either [p=q] or [\\{p,q\\} = \\{0,1\\}]. Then the quotient space X\/∼ is isomorphic to S1.   "
},
{
  "id": "def-2.106",
  "level": "2",
  "url": "sec-constructions.html#def-2.106",
  "type": "Definition",
  "number": "2.2.34",
  "title": "",
  "body": "  Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The torus T2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,s) for all r,s ∈ [0,1].      The Klein bottle K2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,1-s) for all r,s ∈ [0,1].      The Mobius band M2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (0,s) ∼ (1,1-s) for all s ∈ [0,1].      "
},
{
  "id": "def-2.108",
  "level": "2",
  "url": "sec-constructions.html#def-2.108",
  "type": "Definition",
  "number": "2.2.35",
  "title": "",
  "body": "  The projective plane P2 is the quotient space P2 := S2\/∼ where S2 := \\{(x,y,z) ∈ ℝ3 | x2 + y2 + z2 = 1\\} is the 2-sphere (with the Euclidean subspace topology) and ∼ is the equivalence relation generated by (x,y,z) ∼ (-x,-y,-z) for all (x,y,z) ∈ S2.   "
},
{
  "id": "thm-2.110",
  "level": "2",
  "url": "sec-constructions.html#thm-2.110",
  "type": "Theorem",
  "number": "2.2.36",
  "title": "",
  "body": "  Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The cylinder S1 × [0,1] is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1,r) for all r ∈ [0,1].    The projective plane P2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) and (0,1-s) ∼ (1,s) for all r,s ∈ [0,1].    The 2-sphere S2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (0,r) and (s,1) ∼ (1,s) for all r,s ∈ [0,1].    The torus T2 is homeomorphic to the product space S1 × S1 where each S1 has the Euclidean subspace topology.      "
},
{
  "id": "thm-2.120",
  "level": "2",
  "url": "sec-constructions.html#thm-2.120",
  "type": "Theorem",
  "number": "2.2.37",
  "title": "",
  "body": "  (CC13 and CQ1) (CFBT = \"Continuous Function Building Theorem for quotient spaces\"): Let X and Z be topological spaces, let ∼ be an equivalence relation on X, let q: X \\to X\/∼ be the equivalence map, and let X\/∼ have the quotient topology. Suppose that f: X \\to Z is a continuous function that is constant on equivalence classes. Then: (1) The map f induces a continuous function g: X\/∼ \\to Z with g ∘ q = f. (2) If f is onto then g is onto. (2') If f is a quotient map, then g is a quotient map. (3) If [ f(x)=f(x') implies q(x)=q(x') for all x,x' ∈ X] then g is one-to-one. (4) If f is a quotient map and (3) holds then g is a homeomorphism.   "
},
{
  "id": "def-2.123",
  "level": "2",
  "url": "sec-constructions.html#def-2.123",
  "type": "Definition",
  "number": "2.2.38",
  "title": "",
  "body": "  Let X and Y be topological spaces. An open map from X to Y is a function f:X → Y such that for every open set V in X, the image f(V) is open in Y.   "
},
{
  "id": "prop-2.124",
  "level": "2",
  "url": "sec-constructions.html#prop-2.124",
  "type": "Proposition",
  "number": "2.2.39",
  "title": "",
  "body": "  (CO1) (a) A composition of open functions is open. (b) (CO2) If Xα has the topology Tα for each α ∈ J, and ∏α ∈ J Xα has the product topology, then the projection map pβ : (∏α ∈ J Xα) → Xβ is open. (c) If f:X → Y is an open function and if B is a subspace of Y satisfying f(X) ⊆ B ⊆ Y, then f|B is an open map. (d) (CO3) A finite product of open maps is open.   "
},
{
  "id": "thm-2.126",
  "level": "2",
  "url": "sec-constructions.html#thm-2.126",
  "type": "Theorem",
  "number": "2.2.40",
  "title": "",
  "body": "  (CQ2) If f: X → Z is continuous, onto, and open, then f is a quotient map.   "
},
{
  "id": "prop-2.127",
  "level": "2",
  "url": "sec-constructions.html#prop-2.127",
  "type": "Proposition",
  "number": "2.2.41",
  "title": "",
  "body": "  There exist quotient maps that are not open maps.   "
},
{
  "id": "def-2.130",
  "level": "2",
  "url": "sec-constructions.html#def-2.130",
  "type": "Definition",
  "number": "2.2.42",
  "title": "",
  "body": "  A retraction of a topological space X to a subspace A is a continuous function r:X → A satisfying r(a) = a for all a ∈ A.   "
},
{
  "id": "thm-2.131",
  "level": "2",
  "url": "sec-constructions.html#thm-2.131",
  "type": "Theorem",
  "number": "2.2.43",
  "title": "",
  "body": "  (CQ3) Every retraction is a quotient map.   "
},
{
  "id": "def-2.134",
  "level": "2",
  "url": "sec-constructions.html#def-2.134",
  "type": "Definition",
  "number": "2.2.44",
  "title": "",
  "body": "  Let (X,𝒯X) and (Y,𝒯Y) be topological spaces with X ∩ Y = ∅. The disjoint union topology on X ∪ Y is 𝒯∐ = \\{ U ∪ V | U ∈ 𝒯X and V ∈ 𝒯Y \\}.   "
},
{
  "id": "def-2.136",
  "level": "2",
  "url": "sec-constructions.html#def-2.136",
  "type": "Definition",
  "number": "2.2.45",
  "title": "",
  "body": "  Let X1 and X2 be disjoint topological spaces, let Ai be a subspace of Xi for each i, and let f : A1 → A2 be a continuous function. The disjoint union of X1 and X2 glued along f, denoted X1 ∐f X2 is defined to be the quotient of the disjoint union space X1 ∪ X2 associated to the the smallest equivalence relation ∼ such that a ∼ f(a) for all a in A1.   "
},
{
  "id": "thm-2.137",
  "level": "2",
  "url": "sec-constructions.html#thm-2.137",
  "type": "Theorem",
  "number": "2.2.46",
  "title": "",
  "body": "  If Ai is a subspace of Xi for i = 1,2 and f : A1 → A2 is continuous, then the function g: X2 → X1 ∐f X2 defined by g(p) := [p] (for all p in X2) is an embedding.   "
},
{
  "id": "thm-2.139",
  "level": "2",
  "url": "sec-constructions.html#thm-2.139",
  "type": "Theorem",
  "number": "2.2.47",
  "title": "",
  "body": "  Let Z be a topological space, let A be an open set in Z, and let ∼ be an equivalence relation on Z satisfying the property that for each a ∈ A, the equivalence class of a satisfies [a] = \\{a\\}. If A has the subspace topology and Z\/∼ has the quotient topology, then the function g: A → Z\/∼ defined by g(a) := [a] for all a ∈ A is an embedding.   "
},
{
  "id": "thm-2.142",
  "level": "2",
  "url": "sec-constructions.html#thm-2.142",
  "type": "Theorem",
  "number": "2.2.48",
  "title": "",
  "body": "  Let X be a topological space, let ∼ be an equivalence relation on X, and let q:X → X\/∼ be the quotient map. Let A be a subspace of X and let q(A) have the subspace topology in X\/∼.   The relation ≈ on A defined by [a ≈ a' if and only if a ∼ a' for all a,a' ∈ A] is an equivalence relation on A.    If A = q-1(q(A)) and A is either an open or closed subset of X, then the the function q|Aq(A):A → q(A) is a quotient map and the function h: A\/≈ → q(A) defined by h([a]) := [h(a)] for all [a] ∈ A\/≈ is a homeomorphism.      "
},
{
  "id": "sec-closed",
  "level": "1",
  "url": "sec-closed.html",
  "type": "Section",
  "number": "2.3",
  "title": "Closed sets, boundaries, and continuity",
  "body": "Closed sets, boundaries, and continuity  Closed sets    A subset C of a topological space X is a closed set in X if and only if X - C is open in X.      Let X be a topological space. Then (1) ∅ and X are closed in X; (2) whenever Aα is closed in X for all α, then ∩α Aα is closed in X; and (3) whenever A1,...,An are closed in X, then ∪i=1n Ai is closed in X.    Closed sets and continuity:    Let X and Y be topological spaces and let f: X → Y. Then f is continuous if and only for every closed set C in Y, the preimage f\\inv(C) is closed in X.      (CC14 = \"Pasting Lemma\"): Let X and Y be topological spaces, let A and B be closed subsets of X, and let A and B have the subspace topologies inherited from X. If f: X → Y satisfies that f|A and f|B are both continuous, then f is continuous.     Examples   Closed sets and constructions:    If A is a subspace of X and C is a subset of A, then C is closed in A if and only if C = A ∩ D for some closed set D in X.      If A is closed in X and B is closed in Y, then A × B is closed in X × Y.     Closures, interiors, boundaries, and limit points    Let X be a topological space and let A ⊆ X. The closure of A in X is the set ClX(A) := ∩A ⊆ C ⊆ X, C closed in X C. The interior of A in X is the set IntX(A) := ∪U ⊆ A, U open in X U. The boundary of A in X is BdX(A) := ClX(A) ∩ ClX(X-A).     Examples     Let X be a topological space and let A and B be subsets of X. (1) ClX(A) is closed in X. (1') IntX(A) is open in X. (2) If A ⊆ B ⊆ X, then ClX(A) ⊆ ClX(B) and IntX(A) ⊆ IntX(B). (3) A is closed in X iff A = ClX(A). (3') B is open in X iff B = IntX(B). (4) ClX(A) is the smallest closed set in X containing A. (4') IntX(A) is the largest open set in X contained in A.    Interaction with continuity:    If X and Y are topological spaces and f: X → Y, then f is continuous if and only if for all A ⊆ X, f(ClX(A)) ⊆ ClY(f(A)).    Interactions with constructions:    Let Y be a subspace of X, and let A be a subset of Y. Then ClY(A) = ClX(A) ∩ Y.      Let Xα be a topological space and let Aα ⊆ Xα for all α. Let ∏α Xα have the product topology. Then Cl∏α Xα(∏α Aα) = ∏α ClXα(Aα).      Let (X,𝒯) be a topological space, let A ⊆ X, and let p ∈ X. (1) The point p ∈ ClX(A) if and only if every open set in X that contains p intersects A. (2) If 𝒯 = 𝒯(ℬ) is the topology generated by a basis ℬ, then p ∈ ClX(A) if and only if every basis element containing p intersects A.      Let X be a topological space, let A ⊆ X, and let p ∈ X. The point p is a limit point of A in X if and only if for every open set U in X containing p, the set (A -\\{p\\}) ∩ U ≠ ∅. The set of limit points of A in X is denoted LimX(A).     Examples     Let X be a topological space, let A ⊆ X, and let p ∈ X. Then p ∈ LimX(A) if and only if p ∈ ClX(A - \\{p\\}).      Let X be a topological space and let A ⊆ X. Then ClX(A) = A ∪ LimX(A).     "
},
{
  "id": "def-2.150",
  "level": "2",
  "url": "sec-closed.html#def-2.150",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A subset C of a topological space X is a closed set in X if and only if X - C is open in X.   "
},
{
  "id": "thm-2.151",
  "level": "2",
  "url": "sec-closed.html#thm-2.151",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  Let X be a topological space. Then (1) ∅ and X are closed in X; (2) whenever Aα is closed in X for all α, then ∩α Aα is closed in X; and (3) whenever A1,...,An are closed in X, then ∪i=1n Ai is closed in X.   "
},
{
  "id": "thm-2.154",
  "level": "2",
  "url": "sec-closed.html#thm-2.154",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f: X → Y. Then f is continuous if and only for every closed set C in Y, the preimage f\\inv(C) is closed in X.   "
},
{
  "id": "thm-2.155",
  "level": "2",
  "url": "sec-closed.html#thm-2.155",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "",
  "body": "  (CC14 = \"Pasting Lemma\"): Let X and Y be topological spaces, let A and B be closed subsets of X, and let A and B have the subspace topologies inherited from X. If f: X → Y satisfies that f|A and f|B are both continuous, then f is continuous.   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-closed.html#example-14",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.160",
  "level": "2",
  "url": "sec-closed.html#thm-2.160",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "",
  "body": "  If A is a subspace of X and C is a subset of A, then C is closed in A if and only if C = A ∩ D for some closed set D in X.   "
},
{
  "id": "thm-2.162",
  "level": "2",
  "url": "sec-closed.html#thm-2.162",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "  If A is closed in X and B is closed in Y, then A × B is closed in X × Y.   "
},
{
  "id": "def-2.170",
  "level": "2",
  "url": "sec-closed.html#def-2.170",
  "type": "Definition",
  "number": "2.3.8",
  "title": "",
  "body": "  Let X be a topological space and let A ⊆ X. The closure of A in X is the set ClX(A) := ∩A ⊆ C ⊆ X, C closed in X C. The interior of A in X is the set IntX(A) := ∪U ⊆ A, U open in X U. The boundary of A in X is BdX(A) := ClX(A) ∩ ClX(X-A).   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-closed.html#example-15",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.172",
  "level": "2",
  "url": "sec-closed.html#thm-2.172",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "",
  "body": "  Let X be a topological space and let A and B be subsets of X. (1) ClX(A) is closed in X. (1') IntX(A) is open in X. (2) If A ⊆ B ⊆ X, then ClX(A) ⊆ ClX(B) and IntX(A) ⊆ IntX(B). (3) A is closed in X iff A = ClX(A). (3') B is open in X iff B = IntX(B). (4) ClX(A) is the smallest closed set in X containing A. (4') IntX(A) is the largest open set in X contained in A.   "
},
{
  "id": "thm-2.174",
  "level": "2",
  "url": "sec-closed.html#thm-2.174",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "",
  "body": "  If X and Y are topological spaces and f: X → Y, then f is continuous if and only if for all A ⊆ X, f(ClX(A)) ⊆ ClY(f(A)).   "
},
{
  "id": "thm-2.180",
  "level": "2",
  "url": "sec-closed.html#thm-2.180",
  "type": "Theorem",
  "number": "2.3.12",
  "title": "",
  "body": "  Let Y be a subspace of X, and let A be a subset of Y. Then ClY(A) = ClX(A) ∩ Y.   "
},
{
  "id": "thm-2.182",
  "level": "2",
  "url": "sec-closed.html#thm-2.182",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "",
  "body": "  Let Xα be a topological space and let Aα ⊆ Xα for all α. Let ∏α Xα have the product topology. Then Cl∏α Xα(∏α Aα) = ∏α ClXα(Aα).   "
},
{
  "id": "thm-2.185",
  "level": "2",
  "url": "sec-closed.html#thm-2.185",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "",
  "body": "  Let (X,𝒯) be a topological space, let A ⊆ X, and let p ∈ X. (1) The point p ∈ ClX(A) if and only if every open set in X that contains p intersects A. (2) If 𝒯 = 𝒯(ℬ) is the topology generated by a basis ℬ, then p ∈ ClX(A) if and only if every basis element containing p intersects A.   "
},
{
  "id": "def-2.190",
  "level": "2",
  "url": "sec-closed.html#def-2.190",
  "type": "Definition",
  "number": "2.3.15",
  "title": "",
  "body": "  Let X be a topological space, let A ⊆ X, and let p ∈ X. The point p is a limit point of A in X if and only if for every open set U in X containing p, the set (A -\\{p\\}) ∩ U ≠ ∅. The set of limit points of A in X is denoted LimX(A).   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-closed.html#example-16",
  "type": "Example",
  "number": "2.3.16",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-2.191",
  "level": "2",
  "url": "sec-closed.html#thm-2.191",
  "type": "Theorem",
  "number": "2.3.17",
  "title": "",
  "body": "  Let X be a topological space, let A ⊆ X, and let p ∈ X. Then p ∈ LimX(A) if and only if p ∈ ClX(A - \\{p\\}).   "
},
{
  "id": "thm-2.193",
  "level": "2",
  "url": "sec-closed.html#thm-2.193",
  "type": "Theorem",
  "number": "2.3.18",
  "title": "",
  "body": "  Let X be a topological space and let A ⊆ X. Then ClX(A) = A ∪ LimX(A).   "
},
{
  "id": "sec-motivation",
  "level": "1",
  "url": "sec-motivation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Motivation and Hausdorff",
  "body": "Motivation and Hausdorff    A property P of topological spaces is a homeomorphism invariant if whenever X and Y are homeomorphic topological spaces and X has property P, then Y has property P.     Use homeomorphism invariants to prove two spaces are NOT homeomorphic.     A space (X,𝒯X) is a finite topological space if the set X is finite.      A topological space X is T2 (or Hausdorff) if for every pair of points a,b ∈ X with a ≠ b, there exist open sets U,V in X such that a ∈ U, b ∈ V, and U ∩ V = ∅.     Examples     T2 is a homeomorphism invariant.    Interactions with constructions and continuous functions:       If X is a T2 space and Y is a subspace of X, then Y is T2.    If Xα is a T2 space for all α then the product space ∏α Xα is T2.        T2 is not preserved by quotients, continuous images, or continuous preimages.      Let X be a T2 topological space and let p ∈ X. Then {p} is closed in X.    "
},
{
  "id": "def-3.1",
  "level": "2",
  "url": "sec-motivation.html#def-3.1",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A property P of topological spaces is a homeomorphism invariant if whenever X and Y are homeomorphic topological spaces and X has property P, then Y has property P.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-motivation.html#remark-3",
  "type": "Remark",
  "number": "3.1.2",
  "title": "",
  "body": " Use homeomorphism invariants to prove two spaces are NOT homeomorphic.  "
},
{
  "id": "def-3.6",
  "level": "2",
  "url": "sec-motivation.html#def-3.6",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  A space (X,𝒯X) is a finite topological space if the set X is finite.   "
},
{
  "id": "def-3.7",
  "level": "2",
  "url": "sec-motivation.html#def-3.7",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  A topological space X is T2 (or Hausdorff) if for every pair of points a,b ∈ X with a ≠ b, there exist open sets U,V in X such that a ∈ U, b ∈ V, and U ∩ V = ∅.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-motivation.html#example-17",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.8",
  "level": "2",
  "url": "sec-motivation.html#thm-3.8",
  "type": "Theorem",
  "number": "3.1.6",
  "title": "",
  "body": "  T2 is a homeomorphism invariant.   "
},
{
  "id": "prop-3.10",
  "level": "2",
  "url": "sec-motivation.html#prop-3.10",
  "type": "Proposition",
  "number": "3.1.7",
  "title": "",
  "body": "     If X is a T2 space and Y is a subspace of X, then Y is T2.    If Xα is a T2 space for all α then the product space ∏α Xα is T2.      "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-motivation.html#remark-4",
  "type": "Remark",
  "number": "3.1.8",
  "title": "",
  "body": " T2 is not preserved by quotients, continuous images, or continuous preimages.  "
},
{
  "id": "thm-3.13",
  "level": "2",
  "url": "sec-motivation.html#thm-3.13",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": "  Let X be a T2 topological space and let p ∈ X. Then {p} is closed in X.   "
},
{
  "id": "sec-metric",
  "level": "1",
  "url": "sec-metric.html",
  "type": "Section",
  "number": "3.2",
  "title": "Metrizability",
  "body": "Metrizability    A metric on a set X is a function d: X × X → ℝ satisfying the following for all x,y,z ∈ X:   d(x,y) ≥ 0, and d(x,y) = 0 if and only if x = y.    d(x,y) = d(y,x).    d(x,z) ≤ d(x,y) + d(y,z).   The pair (X,d) is a metric space, and for any x,y ∈ X the real number d(x,y) is the distance from x to y.      Let d be a metric on a set X. For any p ∈ X and r ∈ ℝ with r > 0, the ball of radius r centered at p is Bd(p,r) := {q ∈ X | d(p,q) < r}. The metric basis on X induced by d is the collection ℬd := {Bd(p,r) | p ∈ X and r > 0}. The metric topology on X induced by d is the topology 𝒯d := 𝒯(ℬd) generated by the metric basis.      Let (X,d) be a metric space. The metric basis on X is a basis, and hence the metric topology is a topology.      Let (X,d) be a metric space, let X have the metric topology, and let X × X have the product topology Then the metric function d: X × X → (ℝ,𝒯Eucl) is continuous.     Examples     A topological space (X,𝒯X) is metrizable if there is a metric d on X such that 𝒯X = 𝒯d (where 𝒯d is the metric topology on X induced by d).      Metrizability is a homeomorphism invariant.    Interactions with constructions and continuous functions:       If X is a metrizable space and Y is a subspace of X, then Y is metrizable.    If X and Y are metrizable spaces, then the product space X × Y is metrizable.        Metrizability is not preserved by quotients, continuous images, or continuous preimages.    Interactions with homeomorphism invariants:    Metrizable spaces are T2.     "
},
{
  "id": "def-3.20",
  "level": "2",
  "url": "sec-metric.html#def-3.20",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  A metric on a set X is a function d: X × X → ℝ satisfying the following for all x,y,z ∈ X:   d(x,y) ≥ 0, and d(x,y) = 0 if and only if x = y.    d(x,y) = d(y,x).    d(x,z) ≤ d(x,y) + d(y,z).   The pair (X,d) is a metric space, and for any x,y ∈ X the real number d(x,y) is the distance from x to y.   "
},
{
  "id": "def-3.22",
  "level": "2",
  "url": "sec-metric.html#def-3.22",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  Let d be a metric on a set X. For any p ∈ X and r ∈ ℝ with r > 0, the ball of radius r centered at p is Bd(p,r) := {q ∈ X | d(p,q) < r}. The metric basis on X induced by d is the collection ℬd := {Bd(p,r) | p ∈ X and r > 0}. The metric topology on X induced by d is the topology 𝒯d := 𝒯(ℬd) generated by the metric basis.   "
},
{
  "id": "prop-3.24",
  "level": "2",
  "url": "sec-metric.html#prop-3.24",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "",
  "body": "  Let (X,d) be a metric space. The metric basis on X is a basis, and hence the metric topology is a topology.   "
},
{
  "id": "thm-3.25",
  "level": "2",
  "url": "sec-metric.html#thm-3.25",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "",
  "body": "  Let (X,d) be a metric space, let X have the metric topology, and let X × X have the product topology Then the metric function d: X × X → (ℝ,𝒯Eucl) is continuous.   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-metric.html#example-18",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-3.27",
  "level": "2",
  "url": "sec-metric.html#def-3.27",
  "type": "Definition",
  "number": "3.2.6",
  "title": "",
  "body": "  A topological space (X,𝒯X) is metrizable if there is a metric d on X such that 𝒯X = 𝒯d (where 𝒯d is the metric topology on X induced by d).   "
},
{
  "id": "thm-3.28",
  "level": "2",
  "url": "sec-metric.html#thm-3.28",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "",
  "body": "  Metrizability is a homeomorphism invariant.   "
},
{
  "id": "prop-3.30",
  "level": "2",
  "url": "sec-metric.html#prop-3.30",
  "type": "Proposition",
  "number": "3.2.8",
  "title": "",
  "body": "     If X is a metrizable space and Y is a subspace of X, then Y is metrizable.    If X and Y are metrizable spaces, then the product space X × Y is metrizable.      "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-metric.html#remark-5",
  "type": "Remark",
  "number": "3.2.9",
  "title": "",
  "body": " Metrizability is not preserved by quotients, continuous images, or continuous preimages.  "
},
{
  "id": "thm-3.33",
  "level": "2",
  "url": "sec-metric.html#thm-3.33",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "",
  "body": "  Metrizable spaces are T2.   "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "3.3",
  "title": "Connectedness",
  "body": "Connectedness  Connected  Motivation: Characterize spaces for which the Intermediate Value Theorem holds.    A topological space X is connected if whenever U and V are open sets in X satisfying U ∪ V = X and U ∩ V = ∅, then either U = ∅ or V = ∅.      A disconnection of a space X is a pair U,V of nonempty disjoint open sets in X whose union is X.    IVT = Intermediate Value Theorem   Let X be a connected space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. If p,q ∈ X and r ∈ ℝ satifies f(p) < r < f(q), then there is an x ∈ X with f(x)=r.     Examples     A space X is connected if and only if the subsets of X that are both open and closed in X are X and ∅.    Interactions with constructions and continuous functions:    A continuous image of a connected space is connected. That is, if X,Y are topological spaces, and if X is connected and f: X → Y is a continuous function, then the subspace f(X) of Y is connected.      Connectedness is a homeomorphism invariant.      If X is a connected space and X\/∼ is a quotient space, then X\/∼ is connected.      If X and Y are connected spaces, then the product space X × Y is connected.     Connectedness is not preserved by subspaces or continuous preimages.     Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is a connected subspace of X for all α, then X is connected.      If Y is a connected subspace of a space X and if U,V are a disconnection of X, then either Y ⊆ U or Y ⊆ V.     Connectedness and Euclidean topology:    A subspace Y of (ℝ,𝒯Eucl) is connected if and only if Y is either an interval, a ray, or ℝ.      ℝ and ℝn (with n ≥ 2) with the Euclidean topology are not homeomorphic.       Let X and Y be topological spaces with X ∩ Y = ∅, and let x0 ∈ X and y0 ∈ Y. Let Z := X ∪ Y have the disjoint union topology. Define ∼ to be the minimal equivalence relation on Z such that x0 ~ y0, and let Z\/∼ be the corresponding quotient space. Then:   There are embeddings X → Z\/∼ and Y → Z\/∼.    If X and Y are connected, then Z\/∼ is connected.        Path connected   Let I denote the topological space [0,1] with the Euclidean subspace topology.     Let X be a topological space and let p,q ∈ X. A path in X from p to q is a continuous function f: I → X such that f(0) = p and f(1) = q.      A space X is path-connected, or PC, if for all p,q ∈ X, there is a continuous function f: I → X such that f(0) = p and f(1) = q (that is, there is a path from p to q).     Examples   Interactions with constructions and continuous functions:    A continuous image of a path-connected space is path-connected.      Path-connectedness is a homeomorphism invariant.         If Xα is a path-connected space for all α, then the product space ∏α Xα is path-connected.    If X is a path-connected space and ∼ is an equivalence relation on X, then the quotient space X\/∼ is path-connected.        Path-connectedness is not preserved by subspaces or continuous preimages.     Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is PC subspace of X for all α, then X is PC.     Interactions with homeomorphism invariants:    If X is a path-connected space, then X is connected.      The flea and comb space is the subset X := {(0,1)} ∪ (I × {0}) ∪ (∪n ∈ ℕ {1\/n} × I) of ℝ2 with the Euclidean subspace topology. The point (0,1) is the flea and the subspace X - {(0,1)} is the comb.      Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.      A subspace Y of (ℝ,𝒯Eucl) is path-connected iff Y is either an interval, ray, or ℝ.      Components    Let X be a topological space, and let ∼cc be the equivalence relation on X defined by [p ∼cc q if and only if there is a connected subspace A of X with p,q ∈ A]. A connected component of A is an equivalence class for the relation ∼cc.      Let X be a topological space, and let ∼pc be the equivalence relation on X defined by [p ∼pc q if and only if there is a path in X from p to q]. A path component of A is an equivalence class for the relation ∼pc.     Examples     ∼cc and ∼pc are equivalence relations.      Let X be a topological space. Then X is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.         The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.        "
},
{
  "id": "def-3.40",
  "level": "2",
  "url": "sec-.html#def-3.40",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A topological space X is connected if whenever U and V are open sets in X satisfying U ∪ V = X and U ∩ V = ∅, then either U = ∅ or V = ∅.   "
},
{
  "id": "def-3.41",
  "level": "2",
  "url": "sec-.html#def-3.41",
  "type": "Definition",
  "number": "3.3.2",
  "title": "",
  "body": "  A disconnection of a space X is a pair U,V of nonempty disjoint open sets in X whose union is X.   "
},
{
  "id": "thm-3.44",
  "level": "2",
  "url": "sec-.html#thm-3.44",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "IVT = Intermediate Value Theorem.",
  "body": "IVT = Intermediate Value Theorem   Let X be a connected space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. If p,q ∈ X and r ∈ ℝ satifies f(p) < r < f(q), then there is an x ∈ X with f(x)=r.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-.html#example-19",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.46",
  "level": "2",
  "url": "sec-.html#thm-3.46",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "",
  "body": "  A space X is connected if and only if the subsets of X that are both open and closed in X are X and ∅.   "
},
{
  "id": "thm-3.49",
  "level": "2",
  "url": "sec-.html#thm-3.49",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "",
  "body": "  A continuous image of a connected space is connected. That is, if X,Y are topological spaces, and if X is connected and f: X → Y is a continuous function, then the subspace f(X) of Y is connected.   "
},
{
  "id": "cor-3.50",
  "level": "2",
  "url": "sec-.html#cor-3.50",
  "type": "Corollary",
  "number": "3.3.7",
  "title": "",
  "body": "  Connectedness is a homeomorphism invariant.   "
},
{
  "id": "cor-3.51",
  "level": "2",
  "url": "sec-.html#cor-3.51",
  "type": "Corollary",
  "number": "3.3.8",
  "title": "",
  "body": "  If X is a connected space and X\/∼ is a quotient space, then X\/∼ is connected.   "
},
{
  "id": "thm-3.54",
  "level": "2",
  "url": "sec-.html#thm-3.54",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "",
  "body": "  If X and Y are connected spaces, then the product space X × Y is connected.   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-.html#remark-6",
  "type": "Remark",
  "number": "3.3.10",
  "title": "",
  "body": " Connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "lem-3.57",
  "level": "2",
  "url": "sec-.html#lem-3.57",
  "type": "Lemma",
  "number": "3.3.11",
  "title": "",
  "body": "  Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is a connected subspace of X for all α, then X is connected.   "
},
{
  "id": "prop-3.60",
  "level": "2",
  "url": "sec-.html#prop-3.60",
  "type": "Proposition",
  "number": "3.3.12",
  "title": "",
  "body": "  If Y is a connected subspace of a space X and if U,V are a disconnection of X, then either Y ⊆ U or Y ⊆ V.   "
},
{
  "id": "thm-3.63",
  "level": "2",
  "url": "sec-.html#thm-3.63",
  "type": "Theorem",
  "number": "3.3.13",
  "title": "",
  "body": "  A subspace Y of (ℝ,𝒯Eucl) is connected if and only if Y is either an interval, a ray, or ℝ.   "
},
{
  "id": "prop-3.64",
  "level": "2",
  "url": "sec-.html#prop-3.64",
  "type": "Proposition",
  "number": "3.3.14",
  "title": "",
  "body": "  ℝ and ℝn (with n ≥ 2) with the Euclidean topology are not homeomorphic.   "
},
{
  "id": "thm-3.67",
  "level": "2",
  "url": "sec-.html#thm-3.67",
  "type": "Theorem",
  "number": "3.3.15",
  "title": "",
  "body": "  Let X and Y be topological spaces with X ∩ Y = ∅, and let x0 ∈ X and y0 ∈ Y. Let Z := X ∪ Y have the disjoint union topology. Define ∼ to be the minimal equivalence relation on Z such that x0 ~ y0, and let Z\/∼ be the corresponding quotient space. Then:   There are embeddings X → Z\/∼ and Y → Z\/∼.    If X and Y are connected, then Z\/∼ is connected.      "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-.html#convention-1",
  "type": "Convention",
  "number": "3.3.16",
  "title": "",
  "body": " Let I denote the topological space [0,1] with the Euclidean subspace topology.  "
},
{
  "id": "def-3.71",
  "level": "2",
  "url": "sec-.html#def-3.71",
  "type": "Definition",
  "number": "3.3.17",
  "title": "",
  "body": "  Let X be a topological space and let p,q ∈ X. A path in X from p to q is a continuous function f: I → X such that f(0) = p and f(1) = q.   "
},
{
  "id": "def-3.72",
  "level": "2",
  "url": "sec-.html#def-3.72",
  "type": "Definition",
  "number": "3.3.18",
  "title": "",
  "body": "  A space X is path-connected, or PC, if for all p,q ∈ X, there is a continuous function f: I → X such that f(0) = p and f(1) = q (that is, there is a path from p to q).   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-.html#example-20",
  "type": "Example",
  "number": "3.3.19",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.75",
  "level": "2",
  "url": "sec-.html#thm-3.75",
  "type": "Theorem",
  "number": "3.3.20",
  "title": "",
  "body": "  A continuous image of a path-connected space is path-connected.   "
},
{
  "id": "cor-3.76",
  "level": "2",
  "url": "sec-.html#cor-3.76",
  "type": "Corollary",
  "number": "3.3.21",
  "title": "",
  "body": "  Path-connectedness is a homeomorphism invariant.   "
},
{
  "id": "thm-3.80",
  "level": "2",
  "url": "sec-.html#thm-3.80",
  "type": "Theorem",
  "number": "3.3.22",
  "title": "",
  "body": "     If Xα is a path-connected space for all α, then the product space ∏α Xα is path-connected.    If X is a path-connected space and ∼ is an equivalence relation on X, then the quotient space X\/∼ is path-connected.      "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-.html#remark-7",
  "type": "Remark",
  "number": "3.3.23",
  "title": "",
  "body": " Path-connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "lem-3.83",
  "level": "2",
  "url": "sec-.html#lem-3.83",
  "type": "Lemma",
  "number": "3.3.24",
  "title": "",
  "body": "  Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is PC subspace of X for all α, then X is PC.   "
},
{
  "id": "thm-3.90",
  "level": "2",
  "url": "sec-.html#thm-3.90",
  "type": "Theorem",
  "number": "3.3.25",
  "title": "",
  "body": "  If X is a path-connected space, then X is connected.   "
},
{
  "id": "def-3.93",
  "level": "2",
  "url": "sec-.html#def-3.93",
  "type": "Definition",
  "number": "3.3.26",
  "title": "",
  "body": "  The flea and comb space is the subset X := {(0,1)} ∪ (I × {0}) ∪ (∪n ∈ ℕ {1\/n} × I) of ℝ2 with the Euclidean subspace topology. The point (0,1) is the flea and the subspace X - {(0,1)} is the comb.   "
},
{
  "id": "thm-3.94",
  "level": "2",
  "url": "sec-.html#thm-3.94",
  "type": "Theorem",
  "number": "3.3.27",
  "title": "",
  "body": "  Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.   "
},
{
  "id": "thm-3.96",
  "level": "2",
  "url": "sec-.html#thm-3.96",
  "type": "Theorem",
  "number": "3.3.28",
  "title": "",
  "body": "  A subspace Y of (ℝ,𝒯Eucl) is path-connected iff Y is either an interval, ray, or ℝ.   "
},
{
  "id": "def-3.100",
  "level": "2",
  "url": "sec-.html#def-3.100",
  "type": "Definition",
  "number": "3.3.29",
  "title": "",
  "body": "  Let X be a topological space, and let ∼cc be the equivalence relation on X defined by [p ∼cc q if and only if there is a connected subspace A of X with p,q ∈ A]. A connected component of A is an equivalence class for the relation ∼cc.   "
},
{
  "id": "def-3.102",
  "level": "2",
  "url": "sec-.html#def-3.102",
  "type": "Definition",
  "number": "3.3.30",
  "title": "",
  "body": "  Let X be a topological space, and let ∼pc be the equivalence relation on X defined by [p ∼pc q if and only if there is a path in X from p to q]. A path component of A is an equivalence class for the relation ∼pc.   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-.html#example-21",
  "type": "Example",
  "number": "3.3.31",
  "title": "",
  "body": " Examples  "
},
{
  "id": "lem-3.104",
  "level": "2",
  "url": "sec-.html#lem-3.104",
  "type": "Lemma",
  "number": "3.3.32",
  "title": "",
  "body": "  ∼cc and ∼pc are equivalence relations.   "
},
{
  "id": "thm-3.105",
  "level": "2",
  "url": "sec-.html#thm-3.105",
  "type": "Theorem",
  "number": "3.3.33",
  "title": "",
  "body": "  Let X be a topological space. Then X is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.   "
},
{
  "id": "thm-3.108",
  "level": "2",
  "url": "sec-.html#thm-3.108",
  "type": "Theorem",
  "number": "3.3.34",
  "title": "",
  "body": "     The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.      "
},
{
  "id": "sec-compactness",
  "level": "1",
  "url": "sec-compactness.html",
  "type": "Section",
  "number": "3.4",
  "title": "Compactness",
  "body": "Compactness  Motivation: Characterize spaces for which the Extreme Value Theorem holds.    Let X be a topological space. A collection 𝒞 of subsets of X is said to cover X, or to be a covering of X, if ∪C ∈ 𝒞 C = X. An open covering of a topological space X is a collection 𝒞 of open sets in X that covers X.      A topological space X is compact if every open covering of X contains a finite subcollection that also covers X.    EVT = Extreme Value Theorem   Let X be a compact space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. Then there exist c,d ∈ X such that for all p ∈ X, f(c) ≤ f(p) ≤ f(d).     Examples   Interactions with constructions and continuous functions:    Let A be a subspace of a topological space (X,𝒯X). The space A is compact if and only if for every collection 𝒞 of open sets in X satisfying A ⊆ ∪C ∈ 𝒞 C, there is a finite subcollection 𝒟 ⊆ 𝒞 such that A ⊆ ∪D ∈ 𝒟 D.      A continuous image of a compact space is compact. That is, if X,Y are topological spaces, and if X is compact and f: X → Y is a continuous surjective function, then Y is compact.      Compactness is a homeomorphism invariant.      If X is a compact space and X\/∼ is a quotient space, then X\/∼ is compact.      If A is a subspace of a compact space X and A is a closed subset in X, then A is compact.      Every compact subspace of a Hausdorff space is closed. That is, if Y is a compact subspace of a T2 space X, then Y is a closed subset of X.      If Y is a compact subspace of a T2 space X, and p ∈ X - Y, then there are disjoint open sets U,V in X satisfying p ∈ U and Y ⊆ V.         If X and Y are compact spaces, then the product space X × Y is compact. (a') (\"Tychonoff theorem\") If Xα is a compact space for all α, then the product space ∏α Xα is compact.   Tube Lemma  If X and Y are spaces, p ∈ X, Y is compact, and N is an open set in the product space X × Y containing {p} × Y, then there is an open set W in X such that {p} × Y ⊆ W × Y ⊆ N.        Compactness is not preserved by non-closed subspaces or continuous preimages.    VUT = Very Useful Theorem   A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.    CH-HBT = Compact Hausdorff Homeomorphism Building Theorem   Let X be a compact space, let ∼ be an equivalence relation on X, and let X\/∼ be the quotient space. If Z is a T2 space and f: X → Z is a continuous surjection satisfying [f(p) = f(q) if and only if p ∼ q] for all p,q ∈ X, then the function g: X\/∼ → Z defined by g([p]) := f(p) for all [p] ∈ X\/∼ is a homeomorphism.    (CQ4)   If X is a compact space, Y is a T2 space, and f: X → Y is a surjective continuous function, then f is a quotient map.    Compactness and Euclidean topology:    If a,b ∈ ℝ with a < b, then the interval [a,b], with the subspace topology from (ℝ,𝒯Eucl), is compact.      Let (X,d) be a metric space. The diameter of a nonempty subset Y of X is diam(Y) := sup{d(p,q) | p,q ∈ Y}. The set Y is bounded if diam(Y) is finite.    Heine-Borel Theorem   Let Y be a subspace of (ℝn,𝒯Eucl). Then Y is compact iff Y is a closed and bounded subset of ℝn.          If ≈ is the smallest equivalence relation on I such that 0 ≈ 1, then I\/≈ ≅ S1, with a homeomorphism that maps the equivalence class [s] to the point ( cos(2 π s) , sin(2 π s) ) for all s ∈ I.    If ∼ is the smallest equivalence relation on I × I such that (s,1) ∼ (1,1) for all s ∈ I and (0,t) ∼ (1,1) ∼ (1,t) for all t ∈ I, then (I × I)\/∼ ≅ D2, with a homeomorphism that maps the equivalence class [(1,1)] to the point (1,0) and maps [(s,0)] to (cos(2πs),sin(2πs)) for all s ∈ I.         Let X be a topological space, let ∼ be an equivalence relation on X, and let q:X → X\/∼ be the quotient map. Let I = [0,1] have the Euclidean subspace topology.   The function q':X × I → (X\/∼) × I defined by q'(p,t) := (q(p),t) for all (p,t) ∈ X × I is a quotient map.    The relation ≈ on X × I defined by [(p,t) ≈ (p',t') if and only if p ∼ p' and t = t' for all (p,t),(p',t') ∈ X × I] is an equivalence relation on X × I.    The function h:(X × I)\/≈ → (X\/∼) × I defined by h([(p,t)]) := [(q(p),t)] for all [(p,t)] ∈ (X × I)\/≈ is a homeomorphism.       Lebesgue Number Lemma   If X is a compact metrizable space and 𝒞 is an open covering of X, then there is a real number s > 0 such that whenever A is a subset of X with diameter < s, then there is an open set U in 𝒞 with A ⊆ U.    "
},
{
  "id": "def-3.120",
  "level": "2",
  "url": "sec-compactness.html#def-3.120",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  Let X be a topological space. A collection 𝒞 of subsets of X is said to cover X, or to be a covering of X, if ∪C ∈ 𝒞 C = X. An open covering of a topological space X is a collection 𝒞 of open sets in X that covers X.   "
},
{
  "id": "def-3.121",
  "level": "2",
  "url": "sec-compactness.html#def-3.121",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": "  A topological space X is compact if every open covering of X contains a finite subcollection that also covers X.   "
},
{
  "id": "thm-3.124",
  "level": "2",
  "url": "sec-compactness.html#thm-3.124",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "EVT = Extreme Value Theorem.",
  "body": "EVT = Extreme Value Theorem   Let X be a compact space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. Then there exist c,d ∈ X such that for all p ∈ X, f(c) ≤ f(p) ≤ f(d).   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-compactness.html#example-22",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.128",
  "level": "2",
  "url": "sec-compactness.html#thm-3.128",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "  Let A be a subspace of a topological space (X,𝒯X). The space A is compact if and only if for every collection 𝒞 of open sets in X satisfying A ⊆ ∪C ∈ 𝒞 C, there is a finite subcollection 𝒟 ⊆ 𝒞 such that A ⊆ ∪D ∈ 𝒟 D.   "
},
{
  "id": "thm-3.132",
  "level": "2",
  "url": "sec-compactness.html#thm-3.132",
  "type": "Theorem",
  "number": "3.4.6",
  "title": "",
  "body": "  A continuous image of a compact space is compact. That is, if X,Y are topological spaces, and if X is compact and f: X → Y is a continuous surjective function, then Y is compact.   "
},
{
  "id": "cor-3.133",
  "level": "2",
  "url": "sec-compactness.html#cor-3.133",
  "type": "Corollary",
  "number": "3.4.7",
  "title": "",
  "body": "  Compactness is a homeomorphism invariant.   "
},
{
  "id": "cor-3.134",
  "level": "2",
  "url": "sec-compactness.html#cor-3.134",
  "type": "Corollary",
  "number": "3.4.8",
  "title": "",
  "body": "  If X is a compact space and X\/∼ is a quotient space, then X\/∼ is compact.   "
},
{
  "id": "thm-3.138",
  "level": "2",
  "url": "sec-compactness.html#thm-3.138",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  If A is a subspace of a compact space X and A is a closed subset in X, then A is compact.   "
},
{
  "id": "thm-3.139",
  "level": "2",
  "url": "sec-compactness.html#thm-3.139",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "",
  "body": "  Every compact subspace of a Hausdorff space is closed. That is, if Y is a compact subspace of a T2 space X, then Y is a closed subset of X.   "
},
{
  "id": "cor-3.142",
  "level": "2",
  "url": "sec-compactness.html#cor-3.142",
  "type": "Corollary",
  "number": "3.4.11",
  "title": "",
  "body": "  If Y is a compact subspace of a T2 space X, and p ∈ X - Y, then there are disjoint open sets U,V in X satisfying p ∈ U and Y ⊆ V.   "
},
{
  "id": "thm-3.145",
  "level": "2",
  "url": "sec-compactness.html#thm-3.145",
  "type": "Theorem",
  "number": "3.4.12",
  "title": "",
  "body": "     If X and Y are compact spaces, then the product space X × Y is compact. (a') (\"Tychonoff theorem\") If Xα is a compact space for all α, then the product space ∏α Xα is compact.   Tube Lemma  If X and Y are spaces, p ∈ X, Y is compact, and N is an open set in the product space X × Y containing {p} × Y, then there is an open set W in X such that {p} × Y ⊆ W × Y ⊆ N.      "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-compactness.html#remark-8",
  "type": "Remark",
  "number": "3.4.13",
  "title": "",
  "body": " Compactness is not preserved by non-closed subspaces or continuous preimages.  "
},
{
  "id": "thm-3.150",
  "level": "2",
  "url": "sec-compactness.html#thm-3.150",
  "type": "Theorem",
  "number": "3.4.14",
  "title": "VUT = Very Useful Theorem.",
  "body": "VUT = Very Useful Theorem   A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.   "
},
{
  "id": "cor-3.152",
  "level": "2",
  "url": "sec-compactness.html#cor-3.152",
  "type": "Corollary",
  "number": "3.4.15",
  "title": "CH-HBT = Compact Hausdorff Homeomorphism Building Theorem.",
  "body": "CH-HBT = Compact Hausdorff Homeomorphism Building Theorem   Let X be a compact space, let ∼ be an equivalence relation on X, and let X\/∼ be the quotient space. If Z is a T2 space and f: X → Z is a continuous surjection satisfying [f(p) = f(q) if and only if p ∼ q] for all p,q ∈ X, then the function g: X\/∼ → Z defined by g([p]) := f(p) for all [p] ∈ X\/∼ is a homeomorphism.   "
},
{
  "id": "thm-3.153",
  "level": "2",
  "url": "sec-compactness.html#thm-3.153",
  "type": "Theorem",
  "number": "3.4.16",
  "title": "(CQ4).",
  "body": "(CQ4)   If X is a compact space, Y is a T2 space, and f: X → Y is a surjective continuous function, then f is a quotient map.   "
},
{
  "id": "thm-3.155",
  "level": "2",
  "url": "sec-compactness.html#thm-3.155",
  "type": "Theorem",
  "number": "3.4.17",
  "title": "",
  "body": "  If a,b ∈ ℝ with a < b, then the interval [a,b], with the subspace topology from (ℝ,𝒯Eucl), is compact.   "
},
{
  "id": "def-3.157",
  "level": "2",
  "url": "sec-compactness.html#def-3.157",
  "type": "Definition",
  "number": "3.4.18",
  "title": "",
  "body": "  Let (X,d) be a metric space. The diameter of a nonempty subset Y of X is diam(Y) := sup{d(p,q) | p,q ∈ Y}. The set Y is bounded if diam(Y) is finite.   "
},
{
  "id": "thm-3.158",
  "level": "2",
  "url": "sec-compactness.html#thm-3.158",
  "type": "Theorem",
  "number": "3.4.19",
  "title": "Heine-Borel Theorem.",
  "body": "Heine-Borel Theorem   Let Y be a subspace of (ℝn,𝒯Eucl). Then Y is compact iff Y is a closed and bounded subset of ℝn.   "
},
{
  "id": "prop-3.160",
  "level": "2",
  "url": "sec-compactness.html#prop-3.160",
  "type": "Proposition",
  "number": "3.4.20",
  "title": "",
  "body": "     If ≈ is the smallest equivalence relation on I such that 0 ≈ 1, then I\/≈ ≅ S1, with a homeomorphism that maps the equivalence class [s] to the point ( cos(2 π s) , sin(2 π s) ) for all s ∈ I.    If ∼ is the smallest equivalence relation on I × I such that (s,1) ∼ (1,1) for all s ∈ I and (0,t) ∼ (1,1) ∼ (1,t) for all t ∈ I, then (I × I)\/∼ ≅ D2, with a homeomorphism that maps the equivalence class [(1,1)] to the point (1,0) and maps [(s,0)] to (cos(2πs),sin(2πs)) for all s ∈ I.      "
},
{
  "id": "thm-3.162",
  "level": "2",
  "url": "sec-compactness.html#thm-3.162",
  "type": "Theorem",
  "number": "3.4.21",
  "title": "",
  "body": "  Let X be a topological space, let ∼ be an equivalence relation on X, and let q:X → X\/∼ be the quotient map. Let I = [0,1] have the Euclidean subspace topology.   The function q':X × I → (X\/∼) × I defined by q'(p,t) := (q(p),t) for all (p,t) ∈ X × I is a quotient map.    The relation ≈ on X × I defined by [(p,t) ≈ (p',t') if and only if p ∼ p' and t = t' for all (p,t),(p',t') ∈ X × I] is an equivalence relation on X × I.    The function h:(X × I)\/≈ → (X\/∼) × I defined by h([(p,t)]) := [(q(p),t)] for all [(p,t)] ∈ (X × I)\/≈ is a homeomorphism.      "
},
{
  "id": "thm-3.166",
  "level": "2",
  "url": "sec-compactness.html#thm-3.166",
  "type": "Theorem",
  "number": "3.4.22",
  "title": "Lebesgue Number Lemma.",
  "body": "Lebesgue Number Lemma   If X is a compact metrizable space and 𝒞 is an open covering of X, then there is a real number s > 0 such that whenever A is a subset of X with diameter < s, then there is an open set U in 𝒞 with A ⊆ U.   "
},
{
  "id": "sec-separation",
  "level": "1",
  "url": "sec-separation.html",
  "type": "Section",
  "number": "3.5",
  "title": "Separation and countable basis properties",
  "body": "Separation and countable basis properties   Motivation: Characterize metrizability (in particular for compact spaces) in terms of properties defined via open sets.   Countable Basis    A space (X,𝒯X) has a countable basis if the topology 𝒯X is generated by a basis that is a countable set.      A countable basis is a homeomorphism invariant.      The property of having a topology generated by a countable basis is preserved by subspaces and countable products.     Examples        If (X,𝒯X) is a compact and metrizable space, then 𝒯X is generated by a countable basis.    Metrizability does not imply a countable basis.        Separation properties    Let X be a topological space. X is T1 if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with a ∈ U, b ∉ U, a ∉ V, and b ∈ V. X is T2, or Hausdorff, if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and b ∈ V. X is T3 if X is T1 and for any point a ∈ X and closed set B in X with a ∉ B, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and B ⊆ V. X is T4 if X is T1 and for any closed sets A,B in X with A ∩ B = ∅, there are open sets U,V in X with U ∩ V = ∅, A ⊆ U, and B ⊆ V.     If X is a T1 space, then T3 is also called regular and T4 is also called normal.     For each 1 ≤ i ≤ 4, the property Ti is a homeomorphism invariant.      A space X is T1 if and only if all one-points sets are closed in X.      For each 2 ≤ i ≤ 4, the property Ti implies the property Ti-1, but the converse fails.     Examples   Interactions with constructions    T2 and T3 are preserved by subspaces and products.     T2 and T3 are not preserved by quotients. T4 is not preserved by subspaces, products, or quotients.      A space X is T3 iff X is T1 and for all x ∈ X and open U in X with x ∈ U, there is an open set V in X with x ∈ V ⊆ ClX(V) ⊆ U.      A space X is T4 iff X is T1 and for all closed A and open U in X with A ⊆ U, there is an open set V in X with A ⊆ V ⊆ ClX(V) ⊆ U.     Interactions among homeomorphism invariants    Metrizable spaces are T4. (The converse is not true.)      Compact Hausdorff spaces are T4. (The converse is not true.)      A T3 space with a countable basis is T4.    Urysohn's Lemma   Let X be a T1 space. The following are equivalent:   X is T4.    Whenever A and B are disjoint closed subsets of X, there is a continuous function f : X → [0,1] such that f(A) = {0} and f(B) = {1}.       UMT = Urysohn Metrization Theorem   If X is a T3 space with a countable basis, then X is metrizable.      Let X be compact. The following are equivalent:   X is metrizable.    X is T2 and has a countable basis.        "
},
{
  "id": "def-3.170",
  "level": "2",
  "url": "sec-separation.html#def-3.170",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  A space (X,𝒯X) has a countable basis if the topology 𝒯X is generated by a basis that is a countable set.   "
},
{
  "id": "thm-3.171",
  "level": "2",
  "url": "sec-separation.html#thm-3.171",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "",
  "body": "  A countable basis is a homeomorphism invariant.   "
},
{
  "id": "thm-3.172",
  "level": "2",
  "url": "sec-separation.html#thm-3.172",
  "type": "Theorem",
  "number": "3.5.3",
  "title": "",
  "body": "  The property of having a topology generated by a countable basis is preserved by subspaces and countable products.   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-separation.html#example-23",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.174",
  "level": "2",
  "url": "sec-separation.html#thm-3.174",
  "type": "Theorem",
  "number": "3.5.5",
  "title": "",
  "body": "     If (X,𝒯X) is a compact and metrizable space, then 𝒯X is generated by a countable basis.    Metrizability does not imply a countable basis.      "
},
{
  "id": "def-3.180",
  "level": "2",
  "url": "sec-separation.html#def-3.180",
  "type": "Definition",
  "number": "3.5.6",
  "title": "",
  "body": "  Let X be a topological space. X is T1 if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with a ∈ U, b ∉ U, a ∉ V, and b ∈ V. X is T2, or Hausdorff, if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and b ∈ V. X is T3 if X is T1 and for any point a ∈ X and closed set B in X with a ∉ B, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and B ⊆ V. X is T4 if X is T1 and for any closed sets A,B in X with A ∩ B = ∅, there are open sets U,V in X with U ∩ V = ∅, A ⊆ U, and B ⊆ V.   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-separation.html#remark-9",
  "type": "Remark",
  "number": "3.5.7",
  "title": "",
  "body": " If X is a T1 space, then T3 is also called regular and T4 is also called normal.  "
},
{
  "id": "thm-3.183",
  "level": "2",
  "url": "sec-separation.html#thm-3.183",
  "type": "Theorem",
  "number": "3.5.8",
  "title": "",
  "body": "  For each 1 ≤ i ≤ 4, the property Ti is a homeomorphism invariant.   "
},
{
  "id": "prop-3.185",
  "level": "2",
  "url": "sec-separation.html#prop-3.185",
  "type": "Proposition",
  "number": "3.5.9",
  "title": "",
  "body": "  A space X is T1 if and only if all one-points sets are closed in X.   "
},
{
  "id": "thm-3.186",
  "level": "2",
  "url": "sec-separation.html#thm-3.186",
  "type": "Theorem",
  "number": "3.5.10",
  "title": "",
  "body": "  For each 2 ≤ i ≤ 4, the property Ti implies the property Ti-1, but the converse fails.   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-separation.html#example-24",
  "type": "Example",
  "number": "3.5.11",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-3.190",
  "level": "2",
  "url": "sec-separation.html#thm-3.190",
  "type": "Theorem",
  "number": "3.5.12",
  "title": "",
  "body": "  T2 and T3 are preserved by subspaces and products.   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-separation.html#remark-10",
  "type": "Remark",
  "number": "3.5.13",
  "title": "",
  "body": " T2 and T3 are not preserved by quotients. T4 is not preserved by subspaces, products, or quotients.  "
},
{
  "id": "thm-3.194",
  "level": "2",
  "url": "sec-separation.html#thm-3.194",
  "type": "Theorem",
  "number": "3.5.14",
  "title": "",
  "body": "  A space X is T3 iff X is T1 and for all x ∈ X and open U in X with x ∈ U, there is an open set V in X with x ∈ V ⊆ ClX(V) ⊆ U.   "
},
{
  "id": "thm-3.195",
  "level": "2",
  "url": "sec-separation.html#thm-3.195",
  "type": "Theorem",
  "number": "3.5.15",
  "title": "",
  "body": "  A space X is T4 iff X is T1 and for all closed A and open U in X with A ⊆ U, there is an open set V in X with A ⊆ V ⊆ ClX(V) ⊆ U.   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-separation.html#thm-",
  "type": "Theorem",
  "number": "3.5.16",
  "title": "",
  "body": "  Metrizable spaces are T4. (The converse is not true.)   "
},
{
  "id": "thm-3.200",
  "level": "2",
  "url": "sec-separation.html#thm-3.200",
  "type": "Theorem",
  "number": "3.5.17",
  "title": "",
  "body": "  Compact Hausdorff spaces are T4. (The converse is not true.)   "
},
{
  "id": "thm-3.202",
  "level": "2",
  "url": "sec-separation.html#thm-3.202",
  "type": "Theorem",
  "number": "3.5.18",
  "title": "",
  "body": "  A T3 space with a countable basis is T4.   "
},
{
  "id": "thm-3.208",
  "level": "2",
  "url": "sec-separation.html#thm-3.208",
  "type": "Theorem",
  "number": "3.5.19",
  "title": "Urysohn's Lemma.",
  "body": "Urysohn's Lemma   Let X be a T1 space. The following are equivalent:   X is T4.    Whenever A and B are disjoint closed subsets of X, there is a continuous function f : X → [0,1] such that f(A) = {0} and f(B) = {1}.      "
},
{
  "id": "thm-3.210",
  "level": "2",
  "url": "sec-separation.html#thm-3.210",
  "type": "Theorem",
  "number": "3.5.20",
  "title": "UMT = Urysohn Metrization Theorem.",
  "body": "UMT = Urysohn Metrization Theorem   If X is a T3 space with a countable basis, then X is metrizable.   "
},
{
  "id": "cor-3.212",
  "level": "2",
  "url": "sec-separation.html#cor-3.212",
  "type": "Corollary",
  "number": "3.5.21",
  "title": "",
  "body": "  Let X be compact. The following are equivalent:   X is metrizable.    X is T2 and has a countable basis.      "
},
{
  "id": "sec-homotopy-overview",
  "level": "1",
  "url": "sec-homotopy-overview.html",
  "type": "Section",
  "number": "4.1",
  "title": "Overview of algebraic topology",
  "body": "Overview of algebraic topology  Motivation: Homeomorphism invariants in Chapter 3 are not enough to answer the Homeomorphism Problem, and in particular they cannot show that a sphere is not homeomorphic to a torus.  Motivation: Homotopy equivalence (written ≃) is an equivalence relation that allows deforming\/retracting spaces.    The Homotopy Equivalence Problem asks: Is there a computer algorithm that, upon input of two topological spaces X and Y, can determine whether or not X ≃ Y?      The Classification Problem asks: Is there a computer algorithm that can list all topological spaces up to homeomorphism, or up to homotopy equivalence?     Use homeomorphism invariants to prove X ≇ Y, and use homotopy invariants to prove X ≄ Y.    Motivation: Construct groups associated to topological spaces that, up to isomorphism, are homotopy invariants: Homotopy groups of spaces - all groups Homology groups of spaces - abelian groups Categories and functors   "
},
{
  "id": "def-4.1",
  "level": "2",
  "url": "sec-homotopy-overview.html#def-4.1",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  The Homotopy Equivalence Problem asks: Is there a computer algorithm that, upon input of two topological spaces X and Y, can determine whether or not X ≃ Y?   "
},
{
  "id": "def-4.2",
  "level": "2",
  "url": "sec-homotopy-overview.html#def-4.2",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": "  The Classification Problem asks: Is there a computer algorithm that can list all topological spaces up to homeomorphism, or up to homotopy equivalence?   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-homotopy-overview.html#remark-11",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": " Use homeomorphism invariants to prove X ≇ Y, and use homotopy invariants to prove X ≄ Y.  "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-homotopy-overview.html#remark-12",
  "type": "Remark",
  "number": "4.1.4",
  "title": "",
  "body": " Motivation: Construct groups associated to topological spaces that, up to isomorphism, are homotopy invariants: Homotopy groups of spaces - all groups Homology groups of spaces - abelian groups Categories and functors  "
},
{
  "id": "sec-retracts",
  "level": "1",
  "url": "sec-retracts.html",
  "type": "Section",
  "number": "4.2",
  "title": "Retracts",
  "body": "Retracts    Let A be a subspace of a topological space X. The space A is a retract of X if there is a continuous function r: X → A satisfying r(a) = a for all a ∈ A. The function r is called a retraction from X to A.      Let Y be a subspace of a topological space X. A deformation retraction of X onto Y is a family of maps ft: X → X for all t ∈ I such that:   f0 = 1X,    f1(X) = Y,    ft|Y = 1Y for all t ∈ I, and    the function H: X × I → X defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.   The function H is also called a deformation retraction from X to Y. The space Y is called a deformation retract of X, written X ⇝ Y.      If {ft}t ∈ I is a deformation retraction from a topological space X onto a subspace Y, then ft: X → X is continuous for all t ∈ I. Moreover, f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.      Let X and Y be topological spaces and let f:X → Y be a continuous map. Let (X × I) ∐ Y have the disjoint union topology (where X × I has the product topology), and let ∼ be the minimal equivalence relation on (X × I) ∐ Y such that (p,1) ∼ f(p) for all p ∈ X. The mapping cylinder of f is the quotient space Xf := ((X × I) ∐ Y)\/∼.      If Xf is the mapping cylinder associated to a continuous function f:X → Y, then the functions g:X → Xf defined by g(p) := [(p,0)] for all p ∈ X and h:Y → Xf defined by h(y) := [y] for all y ∈ Y are embeddings.      If X and Y are topological spaces and f:X → Y is a continuous map, then Y is homeomorphic to a deformation retract of the mapping cylinder Xf associated to f.      Let X be a topological space and let f:X → X be a continuous map. Let X × I have the product topology, and let ∼ be the minimal equivalence relation on X × I such that (p,1) ∼ (f(p),0) for all p ∈ X. The mapping torus of f is the quotient space Tf := (X × I)\/∼.     If X is a topological space and f:X → X is a continuous map, then X may not be homeomorphic to a deformation retract of the mapping cylinder Tf associated to f.   "
},
{
  "id": "def-4.10",
  "level": "2",
  "url": "sec-retracts.html#def-4.10",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let A be a subspace of a topological space X. The space A is a retract of X if there is a continuous function r: X → A satisfying r(a) = a for all a ∈ A. The function r is called a retraction from X to A.   "
},
{
  "id": "def-4.12",
  "level": "2",
  "url": "sec-retracts.html#def-4.12",
  "type": "Definition",
  "number": "4.2.2",
  "title": "",
  "body": "  Let Y be a subspace of a topological space X. A deformation retraction of X onto Y is a family of maps ft: X → X for all t ∈ I such that:   f0 = 1X,    f1(X) = Y,    ft|Y = 1Y for all t ∈ I, and    the function H: X × I → X defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.   The function H is also called a deformation retraction from X to Y. The space Y is called a deformation retract of X, written X ⇝ Y.   "
},
{
  "id": "lem-4.14",
  "level": "2",
  "url": "sec-retracts.html#lem-4.14",
  "type": "Lemma",
  "number": "4.2.3",
  "title": "",
  "body": "  If {ft}t ∈ I is a deformation retraction from a topological space X onto a subspace Y, then ft: X → X is continuous for all t ∈ I. Moreover, f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.   "
},
{
  "id": "def-4.20",
  "level": "2",
  "url": "sec-retracts.html#def-4.20",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f:X → Y be a continuous map. Let (X × I) ∐ Y have the disjoint union topology (where X × I has the product topology), and let ∼ be the minimal equivalence relation on (X × I) ∐ Y such that (p,1) ∼ f(p) for all p ∈ X. The mapping cylinder of f is the quotient space Xf := ((X × I) ∐ Y)\/∼.   "
},
{
  "id": "thm-4.21",
  "level": "2",
  "url": "sec-retracts.html#thm-4.21",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  If Xf is the mapping cylinder associated to a continuous function f:X → Y, then the functions g:X → Xf defined by g(p) := [(p,0)] for all p ∈ X and h:Y → Xf defined by h(y) := [y] for all y ∈ Y are embeddings.   "
},
{
  "id": "thm-4.22",
  "level": "2",
  "url": "sec-retracts.html#thm-4.22",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "",
  "body": "  If X and Y are topological spaces and f:X → Y is a continuous map, then Y is homeomorphic to a deformation retract of the mapping cylinder Xf associated to f.   "
},
{
  "id": "def-4.25",
  "level": "2",
  "url": "sec-retracts.html#def-4.25",
  "type": "Definition",
  "number": "4.2.7",
  "title": "",
  "body": "  Let X be a topological space and let f:X → X be a continuous map. Let X × I have the product topology, and let ∼ be the minimal equivalence relation on X × I such that (p,1) ∼ (f(p),0) for all p ∈ X. The mapping torus of f is the quotient space Tf := (X × I)\/∼.   "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-retracts.html#remark-13",
  "type": "Remark",
  "number": "4.2.8",
  "title": "",
  "body": " If X is a topological space and f:X → X is a continuous map, then X may not be homeomorphic to a deformation retract of the mapping cylinder Tf associated to f.  "
},
{
  "id": "sec-homotopy-equiv",
  "level": "1",
  "url": "sec-homotopy-equiv.html",
  "type": "Section",
  "number": "4.3",
  "title": "Homotopy and homotopy equivalence",
  "body": "Homotopy and homotopy equivalence  Motivation: Deformation retraction is not symmetric and so is not an equivalence relation on topological spaces; build a (smallest) equivalence relation that includes deformation retraction.    Let X and Y be topological spaces and let g,h: X → Y continuous functions. A homotopy from g to h is a family of maps ft: X → Y for all t ∈ I such that   f0 = g,    f1 = h, and    the function H: X × I → Y defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.   The function H is also called a homotopy from g to h. The function g is said to be homotopic to h, written g ≃ h.      If g,h: X → Y are continuous functions and {ft}t ∈ I is a homotopy from g to h, then ft: X → X is continuous for all t ∈ I.      Let X and Y be topological spaces. Homotopy is an equivalence relation on the set of functions X → Y.      If Y is a subspace of a topological space X and {ft}t ∈ I is a deformation retraction from X onto Y, then {ft}t ∈ I is a homotopy from f0 = 1X to f1, and f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.     Examples     If Z is a topological space and f,g: Z → (ℝn,𝒯Eucl) are continuous functions, then the straight line homotopy from f to g is the function H: Z × I → ℝn defined by H(p,t) := (1-t)f(p) + tg(p) for all p ∈ X and t ∈ I.      If H is straight line homotopy from f to g, then H is a homotopy from f to g.      Let X and Y be topological spaces, let Z be a subspace of X, and let g,h: X → Y continuous functions that satisfy g|Z = h|Z. A homotopy from g to h relative to Z is a family of maps ft: X → Y for all t ∈ I such that   f0 = g,    f1 = h,    the function H: X × I → Y defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous, and    ft|Z = g|Z for all t ∈ I.   The function H is also called a homotopy from g to h relative to Z. The function g is said to be homotopic to h relative to Z, written g ≃Z h.      Topological spaces X and Y are homotopy equivalent, written X ≃ Y, if there are continuous functions f:X → Y and g:Y → X such that f ∘ g ≃ 1Y and g ∘ f ≃ 1X. The functions f and g are called homotopy equivalences, and each function is a homotopy inverse of the other.      Homotopy equivalence is an equivalence relation on topological spaces.      Let X and Y be topological spaces.   If X ≅ Y then X ≃ Y.    If f,g: X → Y and f = g then f ≃ g. If moreover Z is any subspace of X then f ≃Z g also.         A property P of topological spaces is a homotopy invariant if whenever X ≃ Y and X has property P, then Y has property P.     Use homotopy invariants to prove two spaces are NOT homotopy equivalent.     Path-connectedness is a homotopy invariant.      Compactness is not a homotopy invariant.      If Y is a deformation retract of X, then X ≃ Y.      Let X and Y be topological spaces. Then X ≃ Y if and only if there is a space Z such that X and Y are both deformation retracts of Z.      Let ≈ be the smallest equivalence relation on spaces such that whenever Y is a deformation retract of X then Y ≈ X. Then X ≃ Z iff X ≈ Z.      A space X is contractible if X ≃ P, where P = {*} is the topological space with one point.      Let X and Y be topological spaces. A map f:X → Y is null homotopic if f is homotopic to a constant function.      A space X is contractible iff the identity map 1X on X is nullhomotopic.     Examples   "
},
{
  "id": "def-4.30",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.30",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let X and Y be topological spaces and let g,h: X → Y continuous functions. A homotopy from g to h is a family of maps ft: X → Y for all t ∈ I such that   f0 = g,    f1 = h, and    the function H: X × I → Y defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.   The function H is also called a homotopy from g to h. The function g is said to be homotopic to h, written g ≃ h.   "
},
{
  "id": "lem-4.31",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.31",
  "type": "Lemma",
  "number": "4.3.2",
  "title": "",
  "body": "  If g,h: X → Y are continuous functions and {ft}t ∈ I is a homotopy from g to h, then ft: X → X is continuous for all t ∈ I.   "
},
{
  "id": "lem-4.32",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.32",
  "type": "Lemma",
  "number": "4.3.3",
  "title": "",
  "body": "  Let X and Y be topological spaces. Homotopy is an equivalence relation on the set of functions X → Y.   "
},
{
  "id": "prop-4.35",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.35",
  "type": "Proposition",
  "number": "4.3.4",
  "title": "",
  "body": "  If Y is a subspace of a topological space X and {ft}t ∈ I is a deformation retraction from X onto Y, then {ft}t ∈ I is a homotopy from f0 = 1X to f1, and f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-homotopy-equiv.html#example-25",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-4.37",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.37",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "  If Z is a topological space and f,g: Z → (ℝn,𝒯Eucl) are continuous functions, then the straight line homotopy from f to g is the function H: Z × I → ℝn defined by H(p,t) := (1-t)f(p) + tg(p) for all p ∈ X and t ∈ I.   "
},
{
  "id": "prop-4.38",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.38",
  "type": "Proposition",
  "number": "4.3.7",
  "title": "",
  "body": "  If H is straight line homotopy from f to g, then H is a homotopy from f to g.   "
},
{
  "id": "def-4.40",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.40",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  Let X and Y be topological spaces, let Z be a subspace of X, and let g,h: X → Y continuous functions that satisfy g|Z = h|Z. A homotopy from g to h relative to Z is a family of maps ft: X → Y for all t ∈ I such that   f0 = g,    f1 = h,    the function H: X × I → Y defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous, and    ft|Z = g|Z for all t ∈ I.   The function H is also called a homotopy from g to h relative to Z. The function g is said to be homotopic to h relative to Z, written g ≃Z h.   "
},
{
  "id": "def-4.44",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.44",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  Topological spaces X and Y are homotopy equivalent, written X ≃ Y, if there are continuous functions f:X → Y and g:Y → X such that f ∘ g ≃ 1Y and g ∘ f ≃ 1X. The functions f and g are called homotopy equivalences, and each function is a homotopy inverse of the other.   "
},
{
  "id": "thm-4.45",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.45",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "",
  "body": "  Homotopy equivalence is an equivalence relation on topological spaces.   "
},
{
  "id": "lem-4.47",
  "level": "2",
  "url": "sec-homotopy-equiv.html#lem-4.47",
  "type": "Lemma",
  "number": "4.3.11",
  "title": "",
  "body": "  Let X and Y be topological spaces.   If X ≅ Y then X ≃ Y.    If f,g: X → Y and f = g then f ≃ g. If moreover Z is any subspace of X then f ≃Z g also.      "
},
{
  "id": "def-4.50",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.50",
  "type": "Definition",
  "number": "4.3.12",
  "title": "",
  "body": "  A property P of topological spaces is a homotopy invariant if whenever X ≃ Y and X has property P, then Y has property P.   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-homotopy-equiv.html#remark-14",
  "type": "Remark",
  "number": "4.3.13",
  "title": "",
  "body": " Use homotopy invariants to prove two spaces are NOT homotopy equivalent.  "
},
{
  "id": "thm-4.52",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.52",
  "type": "Theorem",
  "number": "4.3.14",
  "title": "",
  "body": "  Path-connectedness is a homotopy invariant.   "
},
{
  "id": "prop-4.53",
  "level": "2",
  "url": "sec-homotopy-equiv.html#prop-4.53",
  "type": "Proposition",
  "number": "4.3.15",
  "title": "",
  "body": "  Compactness is not a homotopy invariant.   "
},
{
  "id": "thm-4.54",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.54",
  "type": "Theorem",
  "number": "4.3.16",
  "title": "",
  "body": "  If Y is a deformation retract of X, then X ≃ Y.   "
},
{
  "id": "thm-4.55",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.55",
  "type": "Theorem",
  "number": "4.3.17",
  "title": "",
  "body": "  Let X and Y be topological spaces. Then X ≃ Y if and only if there is a space Z such that X and Y are both deformation retracts of Z.   "
},
{
  "id": "cor-4.56",
  "level": "2",
  "url": "sec-homotopy-equiv.html#cor-4.56",
  "type": "Corollary",
  "number": "4.3.18",
  "title": "",
  "body": "  Let ≈ be the smallest equivalence relation on spaces such that whenever Y is a deformation retract of X then Y ≈ X. Then X ≃ Z iff X ≈ Z.   "
},
{
  "id": "def-4.60",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.60",
  "type": "Definition",
  "number": "4.3.19",
  "title": "",
  "body": "  A space X is contractible if X ≃ P, where P = {*} is the topological space with one point.   "
},
{
  "id": "def-4.62",
  "level": "2",
  "url": "sec-homotopy-equiv.html#def-4.62",
  "type": "Definition",
  "number": "4.3.20",
  "title": "",
  "body": "  Let X and Y be topological spaces. A map f:X → Y is null homotopic if f is homotopic to a constant function.   "
},
{
  "id": "thm-4.62",
  "level": "2",
  "url": "sec-homotopy-equiv.html#thm-4.62",
  "type": "Theorem",
  "number": "4.3.21",
  "title": "",
  "body": "  A space X is contractible iff the identity map 1X on X is nullhomotopic.   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-homotopy-equiv.html#example-26",
  "type": "Example",
  "number": "4.3.22",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-pi1",
  "level": "1",
  "url": "sec-pi1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Definition of π1",
  "body": "Definition of π1    Let X be a topological space and let x0 ∈ X. A loop in X at x0 is a continuous function f:I → X with f(0) = f(1) = x0.      Two paths f,g:I → X in a space X are path homotopic, written f ≃p g, if there is a continuous function H: I × I → X such that H(s,0) = f(s) and H(s,1) = g(s) for all s ∈ I, and H(0,t) = f(0) and H(1,t) = f(1) for all t ∈ I. The map H is called a path homotopy.      If X is a topological space, then ≃p is an equivalence relation on the set of paths in X.      Let f,g:I → X be paths in a space X.   If f(1) = g(0), then their product, written f∗g, is the path in X from f(0) to g(1) defined by (f∗g)(s) := f(2s) for all s ∈ [0,1\/2] and (f∗g)(s) := g(2s-1) for all s ∈ [1\/2,1].    The constant path at x0, written cx0, is the path (loop) in X defined by cx0 := x0 for all s ∈ I.    The reverse of the path f is the path frev:I → X defined by frev(s) := f(1-s) for all s ∈ I.         Let f,g,h,k:I → X be paths in a space X, and let x0 := f(0) and x1 := f(1).   If f ≃p g and h ≃p k, then f∗h ≃p g∗k.    cx0∗f ≃p f ≃p f∗cx1.    f∗frev ≃p cx0 and frev∗ f ≃p cx1.         Let X be a topological space and let x0 ∈ X. The fundamental group of X at the basepoint x0, written π1(X,x0), is the set of path homotopy equivalence classes of loops in X at x0, with group operation defined by [f][g] := [f∗g] for all [f],[g] ∈ π1(X,x0).      π1(X,x0) is a group.     Examples     π1(X,x0) = 1 for all x0 in X iff every continuous map S1 → X extends to a continuous map D2 → X.    "
},
{
  "id": "def-5.1",
  "level": "2",
  "url": "sec-pi1.html#def-5.1",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let X be a topological space and let x0 ∈ X. A loop in X at x0 is a continuous function f:I → X with f(0) = f(1) = x0.   "
},
{
  "id": "def-5.3",
  "level": "2",
  "url": "sec-pi1.html#def-5.3",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  Two paths f,g:I → X in a space X are path homotopic, written f ≃p g, if there is a continuous function H: I × I → X such that H(s,0) = f(s) and H(s,1) = g(s) for all s ∈ I, and H(0,t) = f(0) and H(1,t) = f(1) for all t ∈ I. The map H is called a path homotopy.   "
},
{
  "id": "lem-5.4",
  "level": "2",
  "url": "sec-pi1.html#lem-5.4",
  "type": "Lemma",
  "number": "5.1.3",
  "title": "",
  "body": "  If X is a topological space, then ≃p is an equivalence relation on the set of paths in X.   "
},
{
  "id": "def-5.6",
  "level": "2",
  "url": "sec-pi1.html#def-5.6",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "  Let f,g:I → X be paths in a space X.   If f(1) = g(0), then their product, written f∗g, is the path in X from f(0) to g(1) defined by (f∗g)(s) := f(2s) for all s ∈ [0,1\/2] and (f∗g)(s) := g(2s-1) for all s ∈ [1\/2,1].    The constant path at x0, written cx0, is the path (loop) in X defined by cx0 := x0 for all s ∈ I.    The reverse of the path f is the path frev:I → X defined by frev(s) := f(1-s) for all s ∈ I.      "
},
{
  "id": "lem-5.8",
  "level": "2",
  "url": "sec-pi1.html#lem-5.8",
  "type": "Lemma",
  "number": "5.1.5",
  "title": "",
  "body": "  Let f,g,h,k:I → X be paths in a space X, and let x0 := f(0) and x1 := f(1).   If f ≃p g and h ≃p k, then f∗h ≃p g∗k.    cx0∗f ≃p f ≃p f∗cx1.    f∗frev ≃p cx0 and frev∗ f ≃p cx1.      "
},
{
  "id": "def-5.10",
  "level": "2",
  "url": "sec-pi1.html#def-5.10",
  "type": "Definition",
  "number": "5.1.6",
  "title": "",
  "body": "  Let X be a topological space and let x0 ∈ X. The fundamental group of X at the basepoint x0, written π1(X,x0), is the set of path homotopy equivalence classes of loops in X at x0, with group operation defined by [f][g] := [f∗g] for all [f],[g] ∈ π1(X,x0).   "
},
{
  "id": "thm-5.11",
  "level": "2",
  "url": "sec-pi1.html#thm-5.11",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "",
  "body": "  π1(X,x0) is a group.   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-pi1.html#example-27",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.13",
  "level": "2",
  "url": "sec-pi1.html#thm-5.13",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": "  π1(X,x0) = 1 for all x0 in X iff every continuous map S1 → X extends to a continuous map D2 → X.   "
},
{
  "id": "sec-group-homs",
  "level": "1",
  "url": "sec-group-homs.html",
  "type": "Section",
  "number": "5.2",
  "title": "Group homomorphisms",
  "body": "Group homomorphisms  Change of basepoint and PC spaces    Let p:I → X be a path in a space X from x0 to x1. The change of basepoint homomorphism induced by p is the function βp: π1(X,x0) → π1(X,x1) defined by βp([f]) := [prev∗f∗p] for all [f] ∈ π1(X,x0).      If p is a path in X from x0 to x1, then βp: π1(X,x0) → π1(X,x1) is an isomorphism of groups.      If X is a path-connected space, then π1(X) is independent of basepoint, up to isomorphism.      A space X is 0-connected if X is path-connected. A space X is 1-connected, or simply connected, if X is path-connected and π1(X) = 1.     Homomorphisms induced by continuous maps    A pointed space is a pair (X,x0) in which X is a topological space and x0 ∈ X. A function h:X → Y with h(x0) = y0 is a map of pointed spaces h:(X,x0) → (Y,y0).      Let h:(X,x0) → (Y,y0) be a continuous map of pointed spaces. The induced homomomorphism associated to h is the function h∗: π1(X,x0) → π1(Y,y0) defined by h∗([f]) := [h ∘ f] for all [f] ∈ π1(X,x0).     The function h∗ is also sometimes written π1(h).        If h:(X,x0) → (Y,y0) is a continuous map of pointed spaces, then h∗ is a (well-defined) group homomorphism.    If h:(X,x0) → (Y,y0) and k:(Y,y0) → (Z,z0) are continuous maps of pointed spaces, then (k ∘ h)∗ = k∗ ∘ h∗.    For any pointed space (X,x0), (1(X,x0))∗ = 1π1(X,x0).           Let X be a topological space and let x0,x1 ∈ X. Let h:X → Y be a continuous function, and let h0:(X,x0) → (Y,h(x0)) and h1:(X,x1) → (Y,h(x1)) be the corresponding maps of pointed spaces. If p:I → X is a path from x0 to x1, then βh ∘ p ∘ (h0)∗ = (h1)∗ ∘ βp.      If X and Y are path-connected spaces and X ≃ Y, then π1(X) ≅ π1(Y).      The isomorphism class of the fundamental group is a homotopy type invariant for PC spaces.      If X is a contractible space then π1(X) = 1.      If X and Y are homotopy equivalent path-connected spaces, then π1(X) is abelian [respectively, finite] if and only if π1(Y) is abelian [respectively, finite].     Interactions with constructions    If X and Y are PC topological spaces and X × Y has the product topology, then π1(X × Y) ≅ π1(X) × π1(Y).        If A is a subspace of X, then π1(A) might not be a subgroup of π1(X).    For equivalence relation ∼ on a space X, π1(X\/∼) might not be a quotient (group) of π1(X).        If r:X → A is a retraction and i:A → X is the inclusion, then r∗ is onto and i∗ is one-to-one.      Let A be a PC subspace of a PC topological space X, and let a0 ∈ A. Let i: A → X be the inclusion map, and let i∗: π1(A,a0) → π1(A,a0) be the induced homomorphism. Then i∗ is onto if and only if every path in X with endpoints in A is path homotopic to a path in A.     "
},
{
  "id": "def-5.17",
  "level": "2",
  "url": "sec-group-homs.html#def-5.17",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  Let p:I → X be a path in a space X from x0 to x1. The change of basepoint homomorphism induced by p is the function βp: π1(X,x0) → π1(X,x1) defined by βp([f]) := [prev∗f∗p] for all [f] ∈ π1(X,x0).   "
},
{
  "id": "thm-5.18",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.18",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  If p is a path in X from x0 to x1, then βp: π1(X,x0) → π1(X,x1) is an isomorphism of groups.   "
},
{
  "id": "cor-5.20",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.20",
  "type": "Corollary",
  "number": "5.2.3",
  "title": "",
  "body": "  If X is a path-connected space, then π1(X) is independent of basepoint, up to isomorphism.   "
},
{
  "id": "def-5.22",
  "level": "2",
  "url": "sec-group-homs.html#def-5.22",
  "type": "Definition",
  "number": "5.2.4",
  "title": "",
  "body": "  A space X is 0-connected if X is path-connected. A space X is 1-connected, or simply connected, if X is path-connected and π1(X) = 1.   "
},
{
  "id": "def-5.24",
  "level": "2",
  "url": "sec-group-homs.html#def-5.24",
  "type": "Definition",
  "number": "5.2.5",
  "title": "",
  "body": "  A pointed space is a pair (X,x0) in which X is a topological space and x0 ∈ X. A function h:X → Y with h(x0) = y0 is a map of pointed spaces h:(X,x0) → (Y,y0).   "
},
{
  "id": "def-5.25",
  "level": "2",
  "url": "sec-group-homs.html#def-5.25",
  "type": "Definition",
  "number": "5.2.6",
  "title": "",
  "body": "  Let h:(X,x0) → (Y,y0) be a continuous map of pointed spaces. The induced homomomorphism associated to h is the function h∗: π1(X,x0) → π1(Y,y0) defined by h∗([f]) := [h ∘ f] for all [f] ∈ π1(X,x0).   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-group-homs.html#remark-15",
  "type": "Remark",
  "number": "5.2.7",
  "title": "",
  "body": " The function h∗ is also sometimes written π1(h).  "
},
{
  "id": "prop-5.28",
  "level": "2",
  "url": "sec-group-homs.html#prop-5.28",
  "type": "Proposition",
  "number": "5.2.8",
  "title": "",
  "body": "     If h:(X,x0) → (Y,y0) is a continuous map of pointed spaces, then h∗ is a (well-defined) group homomorphism.    If h:(X,x0) → (Y,y0) and k:(Y,y0) → (Z,z0) are continuous maps of pointed spaces, then (k ∘ h)∗ = k∗ ∘ h∗.    For any pointed space (X,x0), (1(X,x0))∗ = 1π1(X,x0).      "
},
{
  "id": "thm-5.30",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.30",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "",
  "body": "  Let X be a topological space and let x0,x1 ∈ X. Let h:X → Y be a continuous function, and let h0:(X,x0) → (Y,h(x0)) and h1:(X,x1) → (Y,h(x1)) be the corresponding maps of pointed spaces. If p:I → X is a path from x0 to x1, then βh ∘ p ∘ (h0)∗ = (h1)∗ ∘ βp.   "
},
{
  "id": "thm-5.32",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.32",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "",
  "body": "  If X and Y are path-connected spaces and X ≃ Y, then π1(X) ≅ π1(Y).   "
},
{
  "id": "cor-5.33",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.33",
  "type": "Corollary",
  "number": "5.2.11",
  "title": "",
  "body": "  The isomorphism class of the fundamental group is a homotopy type invariant for PC spaces.   "
},
{
  "id": "cor-5.35",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.35",
  "type": "Corollary",
  "number": "5.2.12",
  "title": "",
  "body": "  If X is a contractible space then π1(X) = 1.   "
},
{
  "id": "cor-5.37",
  "level": "2",
  "url": "sec-group-homs.html#cor-5.37",
  "type": "Corollary",
  "number": "5.2.13",
  "title": "",
  "body": "  If X and Y are homotopy equivalent path-connected spaces, then π1(X) is abelian [respectively, finite] if and only if π1(Y) is abelian [respectively, finite].   "
},
{
  "id": "thm-5.40",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.40",
  "type": "Theorem",
  "number": "5.2.14",
  "title": "",
  "body": "  If X and Y are PC topological spaces and X × Y has the product topology, then π1(X × Y) ≅ π1(X) × π1(Y).   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-group-homs.html#remark-16",
  "type": "Remark",
  "number": "5.2.15",
  "title": "",
  "body": "    If A is a subspace of X, then π1(A) might not be a subgroup of π1(X).    For equivalence relation ∼ on a space X, π1(X\/∼) might not be a quotient (group) of π1(X).     "
},
{
  "id": "thm-5.43",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.43",
  "type": "Theorem",
  "number": "5.2.16",
  "title": "",
  "body": "  If r:X → A is a retraction and i:A → X is the inclusion, then r∗ is onto and i∗ is one-to-one.   "
},
{
  "id": "thm-5.44",
  "level": "2",
  "url": "sec-group-homs.html#thm-5.44",
  "type": "Theorem",
  "number": "5.2.17",
  "title": "",
  "body": "  Let A be a PC subspace of a PC topological space X, and let a0 ∈ A. Let i: A → X be the inclusion map, and let i∗: π1(A,a0) → π1(A,a0) be the induced homomorphism. Then i∗ is onto if and only if every path in X with endpoints in A is path homotopic to a path in A.   "
},
{
  "id": "sec-pi1s1",
  "level": "1",
  "url": "sec-pi1s1.html",
  "type": "Section",
  "number": "5.3",
  "title": "π1(S1)",
  "body": "π1(S1)    For each integer n, let ωn be the loop in S1 defined by ωn(s) := ( cos(2 π n s) , sin(2 π n s) ) for all s ∈ I. Then [ωm][ωn] = [ωm+n] in π1(S1,(1,0)).    Path and Path Homotopy Lifting Theorems (PPHLT) for S1   Let p: R → S1 be defined by p(t) := (cos(2π t), sin(2π t)) for all t ∈ R.   (PLT) Given a path f: (I,0) → (S1,(1,0)), there is a unique path f\": (I,0) → (R,0) such that p ∘ f\" = f.    (PHLT) Given a path homotopy H: (I × I,(0,0)) → (S1,(1,0)) there is a unique path homotopy H\": (I × I,(0,0)) → (R,0) such that p ∘ H\" = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) → (S1,(1,0)), then H\" is a path homotopy between the \"lifts\" f\",g\": (I,0) → (R,0) of f,g from the PLT.       "
},
{
  "id": "prop-5.49",
  "level": "2",
  "url": "sec-pi1s1.html#prop-5.49",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "",
  "body": "  For each integer n, let ωn be the loop in S1 defined by ωn(s) := ( cos(2 π n s) , sin(2 π n s) ) for all s ∈ I. Then [ωm][ωn] = [ωm+n] in π1(S1,(1,0)).   "
},
{
  "id": "thm-5.50",
  "level": "2",
  "url": "sec-pi1s1.html#thm-5.50",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Path and Path Homotopy Lifting Theorems (PPHLT) for S1.",
  "body": "Path and Path Homotopy Lifting Theorems (PPHLT) for S1   Let p: R → S1 be defined by p(t) := (cos(2π t), sin(2π t)) for all t ∈ R.   (PLT) Given a path f: (I,0) → (S1,(1,0)), there is a unique path f\": (I,0) → (R,0) such that p ∘ f\" = f.    (PHLT) Given a path homotopy H: (I × I,(0,0)) → (S1,(1,0)) there is a unique path homotopy H\": (I × I,(0,0)) → (R,0) such that p ∘ H\" = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) → (S1,(1,0)), then H\" is a path homotopy between the \"lifts\" f\",g\": (I,0) → (R,0) of f,g from the PLT.      "
},
{
  "id": "sec-present",
  "level": "1",
  "url": "sec-present.html",
  "type": "Section",
  "number": "5.4",
  "title": "Presenting and decomposing groups",
  "body": "Presenting and decomposing groups  Review and presentations  Review of normal subgroups, cosets, quotients, and generators for subgroups and normal subgroups    Let A be a set, let A' := {a-1 | a ∈ A} be a set that bijects to A, let (A ∪ A')* be the set of all words written with the letters of A ∪ A' (including the empty word, denoted 1), and let ∼ be the smallest equivalence relation on (A ∪ A')* such that xaa-1y ∼ xy ∼ xa-1ay for all a ∈ A and x,y ∈ (A ∪ A')*. The free group on A, denoted F(A), is the quotient set (A ∪ A')*\/∼ with the group operation [v][w] := [vw] where vw is the concatenation of the words v and w. In the case that |A| = n, this group is also denoted Fn.      Let A be a set and let R be a subset of F(A). The normal subgroup generated by R is \\langle R \\rangle^N := {u1r1e1u1-1 ··· ukrkekuk-1 | k ≥ 0, and ri ∈ R, ei ∈ {1,-1}, and ui ∈ F(A) for each 1 ≤ i ≤ k}.      Let A be a set and let R be a subset of F(A). The group presented by the presentation \\langle A | R \\rangle is the quotient group F(A)\/\\langle R \\rangle^N. The set A is the set of generators, the set R is the set of relators, and the set of equations {r = 1 | r ∈ R} is the set of relations of the presentation.      For a set A, R ⊆ F(A), and words v,w ∈(A ∪ A')*, the equation v = w means that v and w are the same word, v =F(A) w means that [v] = [w] in the group F(A), and v =G w means that [v]\\langle R \\rangle^N = [w]\\langle R \\rangle^N in the group G := \\langle A | R \\rangle.     The group \\langle A | R \\rangle is the largest group generated by A satisfying r =G 1 for all r ∈ R.     A group G is finitely generated if G is a quotient of F(A) for some finite set A, and G is finitely presented if G = \\langle A | R \\rangle for some finite sets A and R.     Examples     If G is a group, then G has a presentation; moreover, G is presented by G = \\langle G | ab = (ab) for all a,b ∈ G \\rangle.    HBTP = \"Homomorphism Building Theorem for presentations\"   Let G = \\langle A | R \\rangle, let H be a group, and let f:A → H be a function satisfying the property that for all words b1e1 ··· bmem ∈ R (with each bi ∈ A and ei ∈ {1,-1}), f(b1)e1 ··· f(bm)em =H 1. Then there is a unique group homomorphism h:G → H satisfying h(a) = f(a) for all a ∈ A.      Let A be a set, let R ⊆ F(A), let b be a letter not in A, let w ∈ F(A), and let r ∈ \\langle R \\rangle^N. The operations \\langle A | R \\rangle ↔ \\langle A ∪ {b} | R ∪ {b = w} \\rangle and \\langle A | R \\rangle ↔ \\langle A | R ∪ {r} \\rangle are Tietze transformations.      If \\langle A | R \\rangle ≅ \\langle B | S \\rangle, then there is a finite sequence of Tietze transformations from \\langle A | R \\rangle to \\langle B | S \\rangle.     Building new groups from old -- or decomposing groups  Abelianization    The abelianization of a group G is the quotient group Gab := G\/[G,G] where [G,G] is the commutator subgroup [G,G] := {aba-1b-1 | a,b ∈ G}. The element aba-1b-1 of G is denoted [a,b] and called the commutator of a with b.     There are 3 views of Gab: Using presentations (if G = \\langle A | R \\rangle, then Gab = \\langle A | R ∪ {aba-1b-1 | a,b ∈ A} \\rangle), as the quotient of G by its commutator subgroup (as in Def 5.115), and as the largest abelian group that is a quotient of G.     If G and H are groups and Gab ≇ Hab, then G ≇ H.     Examples    Direct products    Let Gα be a group, and write Gα = \\langle Aα | Rα \\rangle, for each α. The direct sum of the Gα is the group ⊕ Gα = \\langle ∪α Aα | ∪α Rα ∪ {ab = ba | a ∈ Gα, b ∈ α, α ≠ β} \\rangle.     There are 3 views of G × H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G × H = \\langle A ∪ B | R ∪ S ∪ {ab = ba | a ∈ A, b ∈ B} >), as a Cartesian product set with componentwise multiplication, and as the largest group generated by G and H such that the subgroups G and H commute.    Examples    Free Products    Let Gα be a group, and write Gα = \\langle Aα | Rα \\rangle, for each α. The free product of the Gα is the group ∗α Gα = \\langle ∪α Aα | ∪α Rα \\rangle.      Let Gα be a group for all α. A reduced sequence for the collection of groups Gα is a sequence of group elements (or word) of the form g1 ··· gk such that k ≥ 0, for each i ∈ {1,...,k} there is an index αi such that gi ∈ Gαi - {1Gαi}, and for each i ∈ {1,...,k-1}, αi ≠ αi+1. In the case of two groups G and H, a reduced sequence for G,H is a word of one of the forms g1h1 ··· gkhk, g1h1 ··· hk-1gk, h1g2 ··· gkhk, or h1g2 ··· hk-1gk, such that k ≥ 0, and each gi ∈ G - {1G} and hi ∈ H - {1H}.      If G and H are groups, then G ∗ H is isomorphic to the set of reduced sequences for G,H with group operation given by concatenation and reduction (in the groups G and H) to a reduced sequence.     There are 3 views of G ∗ H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G ∗ H\\langle = \\langle A ∪ B | R ∪ S \\rangle), as the set of reduced sequences for G,H (as in Lemma 5.105), and as the largest group generated by G and H.    Examples   HBTFP = \"Homomorphism Building Theorem for free products\"   Let Gα be a group for each α, let J be a group, and let fα:Gα → J be a homomorphism for each α. Then there is a unique group homomorphism h:∗α Gα → J satisfying h(g) = f(g) for all g ∈ Gα, for all α.     Examples    Free products with amalgamation    Let G, H, and K be groups, and let r:K → G and s:K → H be group homomorphisms. The associated free product with amalgamation, or amalgamated product, is the quotient group G ∗K H := (G ∗ H) \/ \\langle{r(k)s(k)-1 | k ∈ K}\\rangle^N.     There are 3 views of G ∗K H: Using presentations (if G = \\langle A | R \\rangle, H = \\langle B | S \\rangle, and K = \\langle C \\rangle, then G ∗K H = \\langle A ∪ B | R ∪ S ∪ {r(k)s(k)-1 | k ∈ K}\\rangle), using cosets represented by reduced sequences, and as the largest group generated by G and H glued along the common subgroups r(K) in G and s(K) in H.   HBTAP = \"Homomorphism Building Theorem for amalgamated products\"   Let G, H, K, and J be groups, and r:K → G, s:K → H, a:G → J and b:H → J be homomorphisms satisfying the property that a ∘ r = b ∘ s. Then there is a unique group homomorphism c:G ∗K H → J satisfying c(g) = a(g) for all g ∈ G and c(h) = b(h) for all h ∈ H.     Examples     "
},
{
  "id": "def-5.70",
  "level": "2",
  "url": "sec-present.html#def-5.70",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  Let A be a set, let A' := {a-1 | a ∈ A} be a set that bijects to A, let (A ∪ A')* be the set of all words written with the letters of A ∪ A' (including the empty word, denoted 1), and let ∼ be the smallest equivalence relation on (A ∪ A')* such that xaa-1y ∼ xy ∼ xa-1ay for all a ∈ A and x,y ∈ (A ∪ A')*. The free group on A, denoted F(A), is the quotient set (A ∪ A')*\/∼ with the group operation [v][w] := [vw] where vw is the concatenation of the words v and w. In the case that |A| = n, this group is also denoted Fn.   "
},
{
  "id": "def-5.75",
  "level": "2",
  "url": "sec-present.html#def-5.75",
  "type": "Definition",
  "number": "5.4.2",
  "title": "",
  "body": "  Let A be a set and let R be a subset of F(A). The normal subgroup generated by R is \\langle R \\rangle^N := {u1r1e1u1-1 ··· ukrkekuk-1 | k ≥ 0, and ri ∈ R, ei ∈ {1,-1}, and ui ∈ F(A) for each 1 ≤ i ≤ k}.   "
},
{
  "id": "def-5.77",
  "level": "2",
  "url": "sec-present.html#def-5.77",
  "type": "Definition",
  "number": "5.4.3",
  "title": "",
  "body": "  Let A be a set and let R be a subset of F(A). The group presented by the presentation \\langle A | R \\rangle is the quotient group F(A)\/\\langle R \\rangle^N. The set A is the set of generators, the set R is the set of relators, and the set of equations {r = 1 | r ∈ R} is the set of relations of the presentation.   "
},
{
  "id": "def-5.78",
  "level": "2",
  "url": "sec-present.html#def-5.78",
  "type": "Definition",
  "number": "5.4.4",
  "title": "",
  "body": "  For a set A, R ⊆ F(A), and words v,w ∈(A ∪ A')*, the equation v = w means that v and w are the same word, v =F(A) w means that [v] = [w] in the group F(A), and v =G w means that [v]\\langle R \\rangle^N = [w]\\langle R \\rangle^N in the group G := \\langle A | R \\rangle.   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-present.html#remark-17",
  "type": "Remark",
  "number": "5.4.5",
  "title": "",
  "body": " The group \\langle A | R \\rangle is the largest group generated by A satisfying r =G 1 for all r ∈ R.  "
},
{
  "id": "def-5.80",
  "level": "2",
  "url": "sec-present.html#def-5.80",
  "type": "Definition",
  "number": "5.4.6",
  "title": "",
  "body": "  A group G is finitely generated if G is a quotient of F(A) for some finite set A, and G is finitely presented if G = \\langle A | R \\rangle for some finite sets A and R.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-present.html#example-28",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": " Examples  "
},
{
  "id": "lem-5.83",
  "level": "2",
  "url": "sec-present.html#lem-5.83",
  "type": "Lemma",
  "number": "5.4.8",
  "title": "",
  "body": "  If G is a group, then G has a presentation; moreover, G is presented by G = \\langle G | ab = (ab) for all a,b ∈ G \\rangle.   "
},
{
  "id": "thm-5.85",
  "level": "2",
  "url": "sec-present.html#thm-5.85",
  "type": "Theorem",
  "number": "5.4.9",
  "title": "HBTP = \"Homomorphism Building Theorem for presentations\".",
  "body": "HBTP = \"Homomorphism Building Theorem for presentations\"   Let G = \\langle A | R \\rangle, let H be a group, and let f:A → H be a function satisfying the property that for all words b1e1 ··· bmem ∈ R (with each bi ∈ A and ei ∈ {1,-1}), f(b1)e1 ··· f(bm)em =H 1. Then there is a unique group homomorphism h:G → H satisfying h(a) = f(a) for all a ∈ A.   "
},
{
  "id": "def-5.87",
  "level": "2",
  "url": "sec-present.html#def-5.87",
  "type": "Definition",
  "number": "5.4.10",
  "title": "",
  "body": "  Let A be a set, let R ⊆ F(A), let b be a letter not in A, let w ∈ F(A), and let r ∈ \\langle R \\rangle^N. The operations \\langle A | R \\rangle ↔ \\langle A ∪ {b} | R ∪ {b = w} \\rangle and \\langle A | R \\rangle ↔ \\langle A | R ∪ {r} \\rangle are Tietze transformations.   "
},
{
  "id": "thm-5.88",
  "level": "2",
  "url": "sec-present.html#thm-5.88",
  "type": "Theorem",
  "number": "5.4.11",
  "title": "",
  "body": "  If \\langle A | R \\rangle ≅ \\langle B | S \\rangle, then there is a finite sequence of Tietze transformations from \\langle A | R \\rangle to \\langle B | S \\rangle.   "
},
{
  "id": "def-5.95",
  "level": "2",
  "url": "sec-present.html#def-5.95",
  "type": "Definition",
  "number": "5.4.12",
  "title": "",
  "body": "  The abelianization of a group G is the quotient group Gab := G\/[G,G] where [G,G] is the commutator subgroup [G,G] := {aba-1b-1 | a,b ∈ G}. The element aba-1b-1 of G is denoted [a,b] and called the commutator of a with b.   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-present.html#remark-18",
  "type": "Remark",
  "number": "5.4.13",
  "title": "",
  "body": " There are 3 views of Gab: Using presentations (if G = \\langle A | R \\rangle, then Gab = \\langle A | R ∪ {aba-1b-1 | a,b ∈ A} \\rangle), as the quotient of G by its commutator subgroup (as in Def 5.115), and as the largest abelian group that is a quotient of G.  "
},
{
  "id": "prop-5.97",
  "level": "2",
  "url": "sec-present.html#prop-5.97",
  "type": "Proposition",
  "number": "5.4.14",
  "title": "",
  "body": "  If G and H are groups and Gab ≇ Hab, then G ≇ H.   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec-present.html#example-29",
  "type": "Example",
  "number": "5.4.15",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.100",
  "level": "2",
  "url": "sec-present.html#def-5.100",
  "type": "Definition",
  "number": "5.4.16",
  "title": "",
  "body": "  Let Gα be a group, and write Gα = \\langle Aα | Rα \\rangle, for each α. The direct sum of the Gα is the group ⊕ Gα = \\langle ∪α Aα | ∪α Rα ∪ {ab = ba | a ∈ Gα, b ∈ α, α ≠ β} \\rangle.   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-present.html#remark-19",
  "type": "Remark",
  "number": "5.4.17",
  "title": "",
  "body": " There are 3 views of G × H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G × H = \\langle A ∪ B | R ∪ S ∪ {ab = ba | a ∈ A, b ∈ B} >), as a Cartesian product set with componentwise multiplication, and as the largest group generated by G and H such that the subgroups G and H commute.  "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-present.html#example-30",
  "type": "Example",
  "number": "5.4.18",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.103",
  "level": "2",
  "url": "sec-present.html#def-5.103",
  "type": "Definition",
  "number": "5.4.19",
  "title": "",
  "body": "  Let Gα be a group, and write Gα = \\langle Aα | Rα \\rangle, for each α. The free product of the Gα is the group ∗α Gα = \\langle ∪α Aα | ∪α Rα \\rangle.   "
},
{
  "id": "def-5.104",
  "level": "2",
  "url": "sec-present.html#def-5.104",
  "type": "Definition",
  "number": "5.4.20",
  "title": "",
  "body": "  Let Gα be a group for all α. A reduced sequence for the collection of groups Gα is a sequence of group elements (or word) of the form g1 ··· gk such that k ≥ 0, for each i ∈ {1,...,k} there is an index αi such that gi ∈ Gαi - {1Gαi}, and for each i ∈ {1,...,k-1}, αi ≠ αi+1. In the case of two groups G and H, a reduced sequence for G,H is a word of one of the forms g1h1 ··· gkhk, g1h1 ··· hk-1gk, h1g2 ··· gkhk, or h1g2 ··· hk-1gk, such that k ≥ 0, and each gi ∈ G - {1G} and hi ∈ H - {1H}.   "
},
{
  "id": "lem-5.105",
  "level": "2",
  "url": "sec-present.html#lem-5.105",
  "type": "Lemma",
  "number": "5.4.21",
  "title": "",
  "body": "  If G and H are groups, then G ∗ H is isomorphic to the set of reduced sequences for G,H with group operation given by concatenation and reduction (in the groups G and H) to a reduced sequence.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-present.html#remark-20",
  "type": "Remark",
  "number": "5.4.22",
  "title": "",
  "body": " There are 3 views of G ∗ H: Using presentations (if G = \\langle A | R \\rangle and H = \\langle B | S \\rangle, then G ∗ H\\langle = \\langle A ∪ B | R ∪ S \\rangle), as the set of reduced sequences for G,H (as in Lemma 5.105), and as the largest group generated by G and H.  "
},
{
  "id": "example-31",
  "level": "2",
  "url": "sec-present.html#example-31",
  "type": "Example",
  "number": "5.4.23",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.108",
  "level": "2",
  "url": "sec-present.html#thm-5.108",
  "type": "Theorem",
  "number": "5.4.24",
  "title": "HBTFP = \"Homomorphism Building Theorem for free products\".",
  "body": "HBTFP = \"Homomorphism Building Theorem for free products\"   Let Gα be a group for each α, let J be a group, and let fα:Gα → J be a homomorphism for each α. Then there is a unique group homomorphism h:∗α Gα → J satisfying h(g) = f(g) for all g ∈ Gα, for all α.   "
},
{
  "id": "example-32",
  "level": "2",
  "url": "sec-present.html#example-32",
  "type": "Example",
  "number": "5.4.25",
  "title": "",
  "body": " Examples  "
},
{
  "id": "def-5.110",
  "level": "2",
  "url": "sec-present.html#def-5.110",
  "type": "Definition",
  "number": "5.4.26",
  "title": "",
  "body": "  Let G, H, and K be groups, and let r:K → G and s:K → H be group homomorphisms. The associated free product with amalgamation, or amalgamated product, is the quotient group G ∗K H := (G ∗ H) \/ \\langle{r(k)s(k)-1 | k ∈ K}\\rangle^N.   "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "sec-present.html#remark-21",
  "type": "Remark",
  "number": "5.4.27",
  "title": "",
  "body": " There are 3 views of G ∗K H: Using presentations (if G = \\langle A | R \\rangle, H = \\langle B | S \\rangle, and K = \\langle C \\rangle, then G ∗K H = \\langle A ∪ B | R ∪ S ∪ {r(k)s(k)-1 | k ∈ K}\\rangle), using cosets represented by reduced sequences, and as the largest group generated by G and H glued along the common subgroups r(K) in G and s(K) in H.  "
},
{
  "id": "thm-5.113",
  "level": "2",
  "url": "sec-present.html#thm-5.113",
  "type": "Theorem",
  "number": "5.4.28",
  "title": "HBTAP = \"Homomorphism Building Theorem for amalgamated products\".",
  "body": "HBTAP = \"Homomorphism Building Theorem for amalgamated products\"   Let G, H, K, and J be groups, and r:K → G, s:K → H, a:G → J and b:H → J be homomorphisms satisfying the property that a ∘ r = b ∘ s. Then there is a unique group homomorphism c:G ∗K H → J satisfying c(g) = a(g) for all g ∈ G and c(h) = b(h) for all h ∈ H.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "sec-present.html#example-33",
  "type": "Example",
  "number": "5.4.29",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-svk",
  "level": "1",
  "url": "sec-svk.html",
  "type": "Section",
  "number": "5.5",
  "title": "SVK",
  "body": "SVK  SVK Theorem statement and first examples  SVK = \"Seifert-Van Kampen Theorem\"   Let X be a topological space with basepoint x0 and PC subspaces Aα (for indices α in an index set J) such that each Aα is an open set in X containing x0, every pairwise and triple intersection Aα ∩ Aβ and Aα ∩ Aβ ∩ Aγ is also PC, and X = ∪α ∈ J Aα. For each β,γ ∈ J, let iAβ Aγ: Aβ ∩ Aγ → Aβ be the inclusion map. Then π1(X) ≅ ∗α ∈ J π1(Aα)\/N, where N is the normal subgroup generated by all elements of the form iAβ Aγ∗([w]) iAγ Aβ∗([w])-1 with [w] ∈ π1(Aβ ∩ Aγ) and β,γ ∈ J.    Examples    π1(Sn) = 1 for all n ≥ 2.      Let X be a disjoint union of singleton spaces Vα = {vα} (for α ∈ J) and spaces Eβ (for β ∈ K) homeomorpic to I. For each β ∈ K, let sβ,tβ ∈ J. Let ∼ be the equivalence relation on X generated by the relation 0β ∼ vsβ and 1β ∼ vtβ. The quotient space X\/∼ is a graph. Each point [vα] is a vertex of the graph X\/∼, and the image of each Eβ is an edge of the graph.      A bouquet of n circles is a graph with one vertex and n edges.      A tree is a connected graph that does not have a nonempty edge path from a vertex back to itself that does not traverse any edge (in any direction) twice. A maximal tree in a graph X is a subgraph that is a tree an includes every vertex of X.      If X is a graph and T is a maximal tree in X, then π1(X) ≅ F(S), where S is the set of edges in X that are not in T.         π1(T2) ≅ ℤ2.    π1(K2) ≅ \\langle a,b | ba = ab-1 \\rangle.    More results from the exercises...         Classification of surfaces    An n-manifold is a T2 space X with a countable basis such that each point p of X is contained in an open subset Up of X that (as a subspace of X) is homeomorphic to ℝn (with the Euclidean topology). A surface is a 2-manifold.      Let S1 and S2 be two surfaces. For 1 ≤ i ≤ 2, let Ci ⊆ Si be a closed set that, as a subspace, has a homeomorphism hi: Ci → D2. Let Ui := hi-1(B((0,0),1)) and let Si - Ui have the subspace topology from Si. Let X := (S1 - U1) ∐ (S2 - U2) have the disjoint union topology, and let ∼ be the smallest equivalence relation on X for which h1-1(p) ∼ h2-1(p) for all p ∈ S1. The quotient space X\/∼ is the connected sum of S1 and S2, and is denoted S1 # S2.      If S1 and S2 are compact connected surfaces, then so is S1 # S2.      If S1 is a surface, then S1 # S2 ≅ S1.     Examples     Let n ≥ 1.   Let Y := #n T2. (a-i) The space Y is homeomorphic to a quotient of a Euclidean 4n-gon with gluings labeled (counterclockwise) by a1b1a1-1b1-1 a2b2a2-1b2-1 ··· anbnan-1bn-1. (a-ii) π1(Y) ≅ \\langle a1,b1, ... ,an, bn | [a1,b1] ··· [an,bn] = 1 \\rangle. (a-ii) π1(Y)ab ≅ ℤ2n.    Let Z := #n P2. (b-i) The space Z is homeomorphic to a quotient of a Euclidean 2n-gon with gluings labeled (counterclockwise) by a1a1 a2a2 ··· anan. (b-ii) π1(Z) ≅ \\langle a1, ... ,an | a12 a22 ··· an2 = 1 \\rangle. (b-ii) π1(Z)ab ≅ ℤn-1 × ℤ\/2.    T2 # P2 ≅ #3 P2       Classification of Surfaces Theorem   Every compact connected surface is homeomorphic to exactly one of S2, #n T2, or #n P2 for some natural number n.     Proof and corollaries of the Seifert-Van Kampen Theorem  Outline:   Building the homomorphism with the HBT,    using the Lebesgue Number Lemma and the \"seashell method\" to prove onto, and    using LNL again to prove 1-1.       Let Xα be a topological space for all α in J such that Xβ ∩ Xγ = ∅ for all β ≠ γ ∈ J, and let pα ∈ Xα for all α. Let ∐α Xα be the union of the Xα with the disjoint union topology, and let ∼ be the equivalence relation on ∐α Xα generated by pβ ∼ pγ for all β,γ ∈ J. The quotient space (∐α Xα)\/∼ is the wedge product of the spaces ∐α Xα (with respect to the basepoints pα); this space is also denoted ∨α Xα.      For each α let Xα be a space with basepoint pα ∈ Xα, and let p := [pα] be the basepoint of the wedge product ∨α Xα. If for each α the singleton space {pα} is a deformation retract of an open set Uα in Xα in X containing pα, then π1(∨α Xα,p) ≅ ∗α π1(Xα,pα) is a free product.     "
},
{
  "id": "thm-5.120",
  "level": "2",
  "url": "sec-svk.html#thm-5.120",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "SVK = \"Seifert-Van Kampen Theorem\".",
  "body": "SVK = \"Seifert-Van Kampen Theorem\"   Let X be a topological space with basepoint x0 and PC subspaces Aα (for indices α in an index set J) such that each Aα is an open set in X containing x0, every pairwise and triple intersection Aα ∩ Aβ and Aα ∩ Aβ ∩ Aγ is also PC, and X = ∪α ∈ J Aα. For each β,γ ∈ J, let iAβ Aγ: Aβ ∩ Aγ → Aβ be the inclusion map. Then π1(X) ≅ ∗α ∈ J π1(Aα)\/N, where N is the normal subgroup generated by all elements of the form iAβ Aγ∗([w]) iAγ Aβ∗([w])-1 with [w] ∈ π1(Aβ ∩ Aγ) and β,γ ∈ J.   "
},
{
  "id": "thm-5.123",
  "level": "2",
  "url": "sec-svk.html#thm-5.123",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "",
  "body": "  π1(Sn) = 1 for all n ≥ 2.   "
},
{
  "id": "def-5.125",
  "level": "2",
  "url": "sec-svk.html#def-5.125",
  "type": "Definition",
  "number": "5.5.3",
  "title": "",
  "body": "  Let X be a disjoint union of singleton spaces Vα = {vα} (for α ∈ J) and spaces Eβ (for β ∈ K) homeomorpic to I. For each β ∈ K, let sβ,tβ ∈ J. Let ∼ be the equivalence relation on X generated by the relation 0β ∼ vsβ and 1β ∼ vtβ. The quotient space X\/∼ is a graph. Each point [vα] is a vertex of the graph X\/∼, and the image of each Eβ is an edge of the graph.   "
},
{
  "id": "def-5.126",
  "level": "2",
  "url": "sec-svk.html#def-5.126",
  "type": "Definition",
  "number": "5.5.4",
  "title": "",
  "body": "  A bouquet of n circles is a graph with one vertex and n edges.   "
},
{
  "id": "def-5.128",
  "level": "2",
  "url": "sec-svk.html#def-5.128",
  "type": "Definition",
  "number": "5.5.5",
  "title": "",
  "body": "  A tree is a connected graph that does not have a nonempty edge path from a vertex back to itself that does not traverse any edge (in any direction) twice. A maximal tree in a graph X is a subgraph that is a tree an includes every vertex of X.   "
},
{
  "id": "thm-5.130",
  "level": "2",
  "url": "sec-svk.html#thm-5.130",
  "type": "Theorem",
  "number": "5.5.6",
  "title": "",
  "body": "  If X is a graph and T is a maximal tree in X, then π1(X) ≅ F(S), where S is the set of edges in X that are not in T.   "
},
{
  "id": "prop-5.133",
  "level": "2",
  "url": "sec-svk.html#prop-5.133",
  "type": "Proposition",
  "number": "5.5.7",
  "title": "",
  "body": "     π1(T2) ≅ ℤ2.    π1(K2) ≅ \\langle a,b | ba = ab-1 \\rangle.    More results from the exercises...      "
},
{
  "id": "def-5.140",
  "level": "2",
  "url": "sec-svk.html#def-5.140",
  "type": "Definition",
  "number": "5.5.8",
  "title": "",
  "body": "  An n-manifold is a T2 space X with a countable basis such that each point p of X is contained in an open subset Up of X that (as a subspace of X) is homeomorphic to ℝn (with the Euclidean topology). A surface is a 2-manifold.   "
},
{
  "id": "def-5.142",
  "level": "2",
  "url": "sec-svk.html#def-5.142",
  "type": "Definition",
  "number": "5.5.9",
  "title": "",
  "body": "  Let S1 and S2 be two surfaces. For 1 ≤ i ≤ 2, let Ci ⊆ Si be a closed set that, as a subspace, has a homeomorphism hi: Ci → D2. Let Ui := hi-1(B((0,0),1)) and let Si - Ui have the subspace topology from Si. Let X := (S1 - U1) ∐ (S2 - U2) have the disjoint union topology, and let ∼ be the smallest equivalence relation on X for which h1-1(p) ∼ h2-1(p) for all p ∈ S1. The quotient space X\/∼ is the connected sum of S1 and S2, and is denoted S1 # S2.   "
},
{
  "id": "thm-5.144",
  "level": "2",
  "url": "sec-svk.html#thm-5.144",
  "type": "Theorem",
  "number": "5.5.10",
  "title": "",
  "body": "  If S1 and S2 are compact connected surfaces, then so is S1 # S2.   "
},
{
  "id": "prop-5.146",
  "level": "2",
  "url": "sec-svk.html#prop-5.146",
  "type": "Proposition",
  "number": "5.5.11",
  "title": "",
  "body": "  If S1 is a surface, then S1 # S2 ≅ S1.   "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-svk.html#example-34",
  "type": "Example",
  "number": "5.5.12",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-5.150",
  "level": "2",
  "url": "sec-svk.html#prop-5.150",
  "type": "Proposition",
  "number": "5.5.13",
  "title": "",
  "body": "  Let n ≥ 1.   Let Y := #n T2. (a-i) The space Y is homeomorphic to a quotient of a Euclidean 4n-gon with gluings labeled (counterclockwise) by a1b1a1-1b1-1 a2b2a2-1b2-1 ··· anbnan-1bn-1. (a-ii) π1(Y) ≅ \\langle a1,b1, ... ,an, bn | [a1,b1] ··· [an,bn] = 1 \\rangle. (a-ii) π1(Y)ab ≅ ℤ2n.    Let Z := #n P2. (b-i) The space Z is homeomorphic to a quotient of a Euclidean 2n-gon with gluings labeled (counterclockwise) by a1a1 a2a2 ··· anan. (b-ii) π1(Z) ≅ \\langle a1, ... ,an | a12 a22 ··· an2 = 1 \\rangle. (b-ii) π1(Z)ab ≅ ℤn-1 × ℤ\/2.    T2 # P2 ≅ #3 P2      "
},
{
  "id": "thm-5.152",
  "level": "2",
  "url": "sec-svk.html#thm-5.152",
  "type": "Theorem",
  "number": "5.5.14",
  "title": "Classification of Surfaces Theorem.",
  "body": "Classification of Surfaces Theorem   Every compact connected surface is homeomorphic to exactly one of S2, #n T2, or #n P2 for some natural number n.   "
},
{
  "id": "def-5.160",
  "level": "2",
  "url": "sec-svk.html#def-5.160",
  "type": "Definition",
  "number": "5.5.15",
  "title": "",
  "body": "  Let Xα be a topological space for all α in J such that Xβ ∩ Xγ = ∅ for all β ≠ γ ∈ J, and let pα ∈ Xα for all α. Let ∐α Xα be the union of the Xα with the disjoint union topology, and let ∼ be the equivalence relation on ∐α Xα generated by pβ ∼ pγ for all β,γ ∈ J. The quotient space (∐α Xα)\/∼ is the wedge product of the spaces ∐α Xα (with respect to the basepoints pα); this space is also denoted ∨α Xα.   "
},
{
  "id": "thm-5.162",
  "level": "2",
  "url": "sec-svk.html#thm-5.162",
  "type": "Theorem",
  "number": "5.5.16",
  "title": "",
  "body": "  For each α let Xα be a space with basepoint pα ∈ Xα, and let p := [pα] be the basepoint of the wedge product ∨α Xα. If for each α the singleton space {pα} is a deformation retract of an open set Uα in Xα in X containing pα, then π1(∨α Xα,p) ≅ ∗α π1(Xα,pα) is a free product.   "
},
{
  "id": "sec-presenting-spaces",
  "level": "1",
  "url": "sec-presenting-spaces.html",
  "type": "Section",
  "number": "5.6",
  "title": "Presenting spaces and the 2-way Street Theorem",
  "body": "Presenting spaces and the 2-way Street Theorem  CW complexes    Let X(0) be a set of points with the discrete topology. For each n ≥ 1, form the space X(n) from X(n-1) by: For each α in an index set Jn, let Dαn be a copy of the closed unit disk Dn in ℝn (with Euclidean topology), and let φα: Sαn-1 → X(n-1) be a continuous function. Let Zn := X(n-1) ∐ (∐α ∈ Jn Dαn) have the disjoint union topology, and let ∼ be the minimal equivalence relation on this space such that d ∼ φα(d) for all d ∈ Sαn-1 and α ∈ Jn. Define X(n) be the quotient space and let qn be the quotient map. Let X := ∪n ∈ ℕ X(n) (where each X(n) is identified with its image in X(n+1)). If there is no n such that X = X(n), then a subset A of X is defined to be open in X if and only if A ∩ X(n) is open in X(n) for all n. The space X is a CW complex, and the topology on X is the CW topology or weak topology. The subspace X(n) of X is the n-skeleton of X. The procedure of building X(n) from X(n-1) is called gluing on n-disks. For each n ≥ 1 and each α ∈ Jn, let Φα : Dαn → X be the composition Φα := iX(n)X ∘ qn ∘ iDαnZn (where iX(n)X: X(n) → X and iDαnZn: Dαn → Zn are the inclusion maps). For n = 0, let J0 be a set in bijection with X(0), and for each α ∈ J0, let Dα0 = Bα0 := {∗} be a singleton space and let Φα : Dα0 → X be defined by Φα(p) := vα, the vertex in X corresponding to α. For all n ≥ 0; and α ∈ Jn, the map Φα is the characteristic map, or gluing map, or attaching map associated to α. The image eαn := Φα(Bαn) is the open n-cell of X corresponding to α. If there is an n ∈ ℕ such that there is an open n-cell but there are no open k-cells for any k > n, then X = X(n) is n-dimensional. If there is no such n, then X is infinite dimensional.      Let X be a CW complex, let n ≥ 1, and let α ∈ Jn.   The map qn|X(n-1) is an embedding of X(n-1) into X(n).    As a set, X(n) is the disjoint union X(n-1) ∐ (∐α ∈ Jn eαn).    Φα|Sαn-1X(n-1) = φα.    The open n-cell eαn is an open set of X and Φα|Bαneαn: Bαn → eαn is a homeomorphism.        Examples     Let X be a CW complex and let A be a subset of X. The set A is open in X if and only if for all n ≥ 1 and all α ∈ Jn, Φα-1(A) is open in Dαn.      Let X be a CW complex.   A subset B of X is closed in X if and only if B ∩ X(n) is closed in X(n) for all n.    If n ≥ 0 and β ∈ Jn, then ClX(eβn) has nonempty intersection with at most finitely many open cell of X.    A subset B of X is closed in X if and only if B ∩ ClX(eβn) is closed in ClX(eβn) for all open cells eβn.        To prove properties of a CW complex X, a standard method is to use induction (on n).     A graph is a 1-dimensional CW complex.      For a CW complex X, the closed n-cell associated to an open n-cell eβn is ClX(eβn). A vertex, or 0-cell, of X is an element of X(0). An edge of X is a closed 1-cell, and a face of X is a closed 2-cell.      Let X be a CW complex with associated index sets Jn for the n-cells and characterstic maps Φα for each α ∈ Jn and each n, and let Y be a topological space.  CW-CFBT = \"CW-Continuous Function Building Thm\"  Suppose that for all n ≥ 0 and α ∈ Jn, gα: Dn → Y is a continuous function. Suppose also that for all α ∈ Jm and β ∈ Jn with α ≠ β, whenever p ∈ Dαm, q ∈ Dβn, and Φα(p) = Φβ(q), then gα(p) = gβ(q). Then the collection {gα} induces a unique continuous function g: X → Y with g ∘ Φα = gα for all n ≥ 0 and α ∈ Jn.   CW-CFCT = \"CW-Continuous Function Checking Thm\"  If f:X → Y is a function, then f is continuous iff every composition f ∘ Φα of f with an attaching map is continuous.       CW-HBT = \"CW-Homeomorphism Building Thm\"   Let X be a compact CW complex with associated index sets Jn for the n-cells and characterstic maps Φα for each α ∈ Jn and each n, and let Y be a T2 topological space. Suppose that for all n ≥ 0 and α ∈ Jn, gα: Dn → Y is a continuous function such that gα|Bn is injective. Suppose also that for all α ∈ Jm and β ∈ Jn with α ≠ β, (i) whenever p ∈ Dαm, q ∈ Dβn, and Φα(p) = Φβ(q), then gα(p) = gβ(q), and (ii) gα(Bαm) ∩ gβ(Bβn) = ∅. If Y = ∪n ≥ 0, α ∈ Jn gα(Bn), then the collection {gα} induces a unique homeomorphism g: X → Y with g ∘ Φα = gα for all n ≥ 0 and α ∈ Jn.    Interactions with homeomorphism invariants    CW complexes are T2.      A CW complex X is compact if and only if X has only finitely many cells.      A CW complex X is PC if and only if the 1-skeleton X(1) is PC.      A space X locally deforms to each point if each point p of X is contained in an open subset Up of X such that there is a deformation retraction from the subspace Up onto {p}.      Every CW complex locally deforms to each point.      If X and Y are PC CW complexes, then X ∨ Y is a CW complex and π1(X ∨ Y) ≅ π1(X) ∗ π1(Y).      A topological space X is defined to be locally path-connected, or LPC, if for every point p ∈ X and every open set U of X containing p, there is an open set V of X such that p ∈ V ⊆ U and (as a subspace of X) V is path-connected.      CW complexes are LPC.      A topological space X is simply-connected, or SC, if X is PC and π1(X) = 1.      A space X is semi-locally simply connected, or SLSC if for each point p of X there is an open set Up of X containing p such that the inclusion map Up → X induces the constant homomorphism π1(Up,p) → π1(X,p) to the identity element of π1(X,p).      CW complexes are SLSC.     Interactions with constructions:    Let X be a CW complex. A subcomplex of X is a closed subspace A in X satisfying the property that whenever eα is an open cell of X and eα ∩ A is nonempty, then ClX(eα) ⊆ A.      If A is a subcomplex of a CW complex X, then A is a CW complex.      If X and Y are compact CW complexes, then X × Y is also a compact CW complex.      Fundamental groups of CW complexes    Let X be a 2-dimensional PC CW complex and let p ∈ X be the basepoint. The inclusion map X(1) → X(2) induces a surjective homomorphism of fundamental groups whose kernel is generated by loops based at p in bijection with the 2-cells of X. More precisely: For each face f = eα2 of X define θα: I → X by θα := iX(1)X ∘ φα ∘ ω, where iX(1)X: X(1) → X is the inclusion map and ω:I → Sα1 is defined by ω(t) := (cos(2πt),sin(2πt)) for all t ∈ I. Let γα:I → X be a path from p to θα(0), and let wf := γα ∗ θα ∗ γαrev. Then π1(X,p) ≅ π1(X(1),p) \/ \\langle{[wf]}\\rangle^N.      For any PC CW complex X, π1(X) ≅ π1(X(2)).    Algorithm to present π1(CW)   Let X be a PC CW complex and let p ∈ X(0) be the basepoint. Let ω:I → Sα1 be defined by ω(t) := (cos(2πt),sin(2πt)) and let ρ:I → D1 be defined by ρ(t) := 2t - 1 for all t ∈ I. Suppose that for each face (2-cell) f = eα2 of X, the map sf: I → X defined by sf := iX(1)X ∘ φα ∘ ω satisfies sf(0) ∈ X(0) and sf follows an edge path in X(1). Then a presentation for π1(X,p) can be computed as follows: Step 0: Choose a maximal tree T in the 1-skeleton X(1). For each vertex v of X, let tv: I → X be the (shortest) path in T from p to v. Step 1: For each edge e = eαe1 of X(1) outside of T, let ae be the loop in X at p defined by ae' := tΦαe(-1) ∗ be ∗ tΦαe(1)rev, where be := Φαe ∘ ρ is the path in X from Φαe(-1) to Φαe(1) that traverses the edge e. Let ae := [ae']. Then π1(X(1),p) = F({ae | e is an edge of X outside of T}). Step 2: For each face f = eαf2 of X(2), let rf'' := tsf(0) ∗ sf ∗ tsf(1)rev. By inserting and\/or deleting path products with paths of the form e ∗ erev and erev ∗ e for edges e in T into rf'', create a path rf' that is a path product of paths of the form ae' or (ae')rev for edges e outside of T; that is, [rf'] =π1(X(1),p) rf for some word rf = ae1j1 ··· aemjm with m ≥ 0 and each ji ∈ {± 1}. Then π1(X,p) = π1(X(2),p) = \\langle {ae | e is an edge of X outside of T} | {rf = 1 | f is a face of X} \\rangle.      The presentation complex associated to a presentation \\langle A | R \\rangle of a group G is a CW complex with one vertex v, an edge ea for each a ∈ A (with attaching maps gluing both endpoints of ea to v), and a face fr for each r ∈ R with attaching map determined by following the edges according to the word r.    \"2-Way Street Thm\"   For every group G, there is a 2-dimensional PC CW complex X with π1(X) ≅ G. Moreover, if \\langle A | R \\rangle is a presentation of G and Y is the associated presentation complex, then π1(Y) ≅ G.     "
},
{
  "id": "def-5.170",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.170",
  "type": "Definition",
  "number": "5.6.1",
  "title": "",
  "body": "  Let X(0) be a set of points with the discrete topology. For each n ≥ 1, form the space X(n) from X(n-1) by: For each α in an index set Jn, let Dαn be a copy of the closed unit disk Dn in ℝn (with Euclidean topology), and let φα: Sαn-1 → X(n-1) be a continuous function. Let Zn := X(n-1) ∐ (∐α ∈ Jn Dαn) have the disjoint union topology, and let ∼ be the minimal equivalence relation on this space such that d ∼ φα(d) for all d ∈ Sαn-1 and α ∈ Jn. Define X(n) be the quotient space and let qn be the quotient map. Let X := ∪n ∈ ℕ X(n) (where each X(n) is identified with its image in X(n+1)). If there is no n such that X = X(n), then a subset A of X is defined to be open in X if and only if A ∩ X(n) is open in X(n) for all n. The space X is a CW complex, and the topology on X is the CW topology or weak topology. The subspace X(n) of X is the n-skeleton of X. The procedure of building X(n) from X(n-1) is called gluing on n-disks. For each n ≥ 1 and each α ∈ Jn, let Φα : Dαn → X be the composition Φα := iX(n)X ∘ qn ∘ iDαnZn (where iX(n)X: X(n) → X and iDαnZn: Dαn → Zn are the inclusion maps). For n = 0, let J0 be a set in bijection with X(0), and for each α ∈ J0, let Dα0 = Bα0 := {∗} be a singleton space and let Φα : Dα0 → X be defined by Φα(p) := vα, the vertex in X corresponding to α. For all n ≥ 0; and α ∈ Jn, the map Φα is the characteristic map, or gluing map, or attaching map associated to α. The image eαn := Φα(Bαn) is the open n-cell of X corresponding to α. If there is an n ∈ ℕ such that there is an open n-cell but there are no open k-cells for any k > n, then X = X(n) is n-dimensional. If there is no such n, then X is infinite dimensional.   "
},
{
  "id": "prop-5.172",
  "level": "2",
  "url": "sec-presenting-spaces.html#prop-5.172",
  "type": "Proposition",
  "number": "5.6.2",
  "title": "",
  "body": "  Let X be a CW complex, let n ≥ 1, and let α ∈ Jn.   The map qn|X(n-1) is an embedding of X(n-1) into X(n).    As a set, X(n) is the disjoint union X(n-1) ∐ (∐α ∈ Jn eαn).    Φα|Sαn-1X(n-1) = φα.    The open n-cell eαn is an open set of X and Φα|Bαneαn: Bαn → eαn is a homeomorphism.      "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-presenting-spaces.html#example-35",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-5.173",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.173",
  "type": "Theorem",
  "number": "5.6.4",
  "title": "",
  "body": "  Let X be a CW complex and let A be a subset of X. The set A is open in X if and only if for all n ≥ 1 and all α ∈ Jn, Φα-1(A) is open in Dαn.   "
},
{
  "id": "prop-5.174",
  "level": "2",
  "url": "sec-presenting-spaces.html#prop-5.174",
  "type": "Proposition",
  "number": "5.6.5",
  "title": "",
  "body": "  Let X be a CW complex.   A subset B of X is closed in X if and only if B ∩ X(n) is closed in X(n) for all n.    If n ≥ 0 and β ∈ Jn, then ClX(eβn) has nonempty intersection with at most finitely many open cell of X.    A subset B of X is closed in X if and only if B ∩ ClX(eβn) is closed in ClX(eβn) for all open cells eβn.      "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-presenting-spaces.html#remark-22",
  "type": "Remark",
  "number": "5.6.6",
  "title": "",
  "body": " To prove properties of a CW complex X, a standard method is to use induction (on n).  "
},
{
  "id": "lem-5.175",
  "level": "2",
  "url": "sec-presenting-spaces.html#lem-5.175",
  "type": "Lemma",
  "number": "5.6.7",
  "title": "",
  "body": "  A graph is a 1-dimensional CW complex.   "
},
{
  "id": "def-5.177",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.177",
  "type": "Definition",
  "number": "5.6.8",
  "title": "",
  "body": "  For a CW complex X, the closed n-cell associated to an open n-cell eβn is ClX(eβn). A vertex, or 0-cell, of X is an element of X(0). An edge of X is a closed 1-cell, and a face of X is a closed 2-cell.   "
},
{
  "id": "thm-5.185",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.185",
  "type": "Theorem",
  "number": "5.6.9",
  "title": "",
  "body": "  Let X be a CW complex with associated index sets Jn for the n-cells and characterstic maps Φα for each α ∈ Jn and each n, and let Y be a topological space.  CW-CFBT = \"CW-Continuous Function Building Thm\"  Suppose that for all n ≥ 0 and α ∈ Jn, gα: Dn → Y is a continuous function. Suppose also that for all α ∈ Jm and β ∈ Jn with α ≠ β, whenever p ∈ Dαm, q ∈ Dβn, and Φα(p) = Φβ(q), then gα(p) = gβ(q). Then the collection {gα} induces a unique continuous function g: X → Y with g ∘ Φα = gα for all n ≥ 0 and α ∈ Jn.   CW-CFCT = \"CW-Continuous Function Checking Thm\"  If f:X → Y is a function, then f is continuous iff every composition f ∘ Φα of f with an attaching map is continuous.      "
},
{
  "id": "thm-5.190",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.190",
  "type": "Theorem",
  "number": "5.6.10",
  "title": "CW-HBT = \"CW-Homeomorphism Building Thm\".",
  "body": "CW-HBT = \"CW-Homeomorphism Building Thm\"   Let X be a compact CW complex with associated index sets Jn for the n-cells and characterstic maps Φα for each α ∈ Jn and each n, and let Y be a T2 topological space. Suppose that for all n ≥ 0 and α ∈ Jn, gα: Dn → Y is a continuous function such that gα|Bn is injective. Suppose also that for all α ∈ Jm and β ∈ Jn with α ≠ β, (i) whenever p ∈ Dαm, q ∈ Dβn, and Φα(p) = Φβ(q), then gα(p) = gβ(q), and (ii) gα(Bαm) ∩ gβ(Bβn) = ∅. If Y = ∪n ≥ 0, α ∈ Jn gα(Bn), then the collection {gα} induces a unique homeomorphism g: X → Y with g ∘ Φα = gα for all n ≥ 0 and α ∈ Jn.   "
},
{
  "id": "thm-5.200",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.200",
  "type": "Theorem",
  "number": "5.6.11",
  "title": "",
  "body": "  CW complexes are T2.   "
},
{
  "id": "thm-5.202",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.202",
  "type": "Theorem",
  "number": "5.6.12",
  "title": "",
  "body": "  A CW complex X is compact if and only if X has only finitely many cells.   "
},
{
  "id": "thm-5.205",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.205",
  "type": "Theorem",
  "number": "5.6.13",
  "title": "",
  "body": "  A CW complex X is PC if and only if the 1-skeleton X(1) is PC.   "
},
{
  "id": "def-5.207",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.207",
  "type": "Definition",
  "number": "5.6.14",
  "title": "",
  "body": "  A space X locally deforms to each point if each point p of X is contained in an open subset Up of X such that there is a deformation retraction from the subspace Up onto {p}.   "
},
{
  "id": "thm-5.208",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.208",
  "type": "Theorem",
  "number": "5.6.15",
  "title": "",
  "body": "  Every CW complex locally deforms to each point.   "
},
{
  "id": "cor-5.209",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.209",
  "type": "Corollary",
  "number": "5.6.16",
  "title": "",
  "body": "  If X and Y are PC CW complexes, then X ∨ Y is a CW complex and π1(X ∨ Y) ≅ π1(X) ∗ π1(Y).   "
},
{
  "id": "def-5.212",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.212",
  "type": "Definition",
  "number": "5.6.17",
  "title": "",
  "body": "  A topological space X is defined to be locally path-connected, or LPC, if for every point p ∈ X and every open set U of X containing p, there is an open set V of X such that p ∈ V ⊆ U and (as a subspace of X) V is path-connected.   "
},
{
  "id": "cor-5.213",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.213",
  "type": "Corollary",
  "number": "5.6.18",
  "title": "",
  "body": "  CW complexes are LPC.   "
},
{
  "id": "def-5.215",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.215",
  "type": "Definition",
  "number": "5.6.19",
  "title": "",
  "body": "  A topological space X is simply-connected, or SC, if X is PC and π1(X) = 1.   "
},
{
  "id": "def-5.216",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.216",
  "type": "Definition",
  "number": "5.6.20",
  "title": "",
  "body": "  A space X is semi-locally simply connected, or SLSC if for each point p of X there is an open set Up of X containing p such that the inclusion map Up → X induces the constant homomorphism π1(Up,p) → π1(X,p) to the identity element of π1(X,p).   "
},
{
  "id": "cor-5.217",
  "level": "2",
  "url": "sec-presenting-spaces.html#cor-5.217",
  "type": "Corollary",
  "number": "5.6.21",
  "title": "",
  "body": "  CW complexes are SLSC.   "
},
{
  "id": "def-5.220",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.220",
  "type": "Definition",
  "number": "5.6.22",
  "title": "",
  "body": "  Let X be a CW complex. A subcomplex of X is a closed subspace A in X satisfying the property that whenever eα is an open cell of X and eα ∩ A is nonempty, then ClX(eα) ⊆ A.   "
},
{
  "id": "thm-5.222",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.222",
  "type": "Theorem",
  "number": "5.6.23",
  "title": "",
  "body": "  If A is a subcomplex of a CW complex X, then A is a CW complex.   "
},
{
  "id": "thm-5.224",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.224",
  "type": "Theorem",
  "number": "5.6.24",
  "title": "",
  "body": "  If X and Y are compact CW complexes, then X × Y is also a compact CW complex.   "
},
{
  "id": "thm-5.230",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.230",
  "type": "Theorem",
  "number": "5.6.25",
  "title": "",
  "body": "  Let X be a 2-dimensional PC CW complex and let p ∈ X be the basepoint. The inclusion map X(1) → X(2) induces a surjective homomorphism of fundamental groups whose kernel is generated by loops based at p in bijection with the 2-cells of X. More precisely: For each face f = eα2 of X define θα: I → X by θα := iX(1)X ∘ φα ∘ ω, where iX(1)X: X(1) → X is the inclusion map and ω:I → Sα1 is defined by ω(t) := (cos(2πt),sin(2πt)) for all t ∈ I. Let γα:I → X be a path from p to θα(0), and let wf := γα ∗ θα ∗ γαrev. Then π1(X,p) ≅ π1(X(1),p) \/ \\langle{[wf]}\\rangle^N.   "
},
{
  "id": "thm-5.231",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.231",
  "type": "Theorem",
  "number": "5.6.26",
  "title": "",
  "body": "  For any PC CW complex X, π1(X) ≅ π1(X(2)).   "
},
{
  "id": "thm-5.233",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.233",
  "type": "Theorem",
  "number": "5.6.27",
  "title": "Algorithm to present π1(CW).",
  "body": "Algorithm to present π1(CW)   Let X be a PC CW complex and let p ∈ X(0) be the basepoint. Let ω:I → Sα1 be defined by ω(t) := (cos(2πt),sin(2πt)) and let ρ:I → D1 be defined by ρ(t) := 2t - 1 for all t ∈ I. Suppose that for each face (2-cell) f = eα2 of X, the map sf: I → X defined by sf := iX(1)X ∘ φα ∘ ω satisfies sf(0) ∈ X(0) and sf follows an edge path in X(1). Then a presentation for π1(X,p) can be computed as follows: Step 0: Choose a maximal tree T in the 1-skeleton X(1). For each vertex v of X, let tv: I → X be the (shortest) path in T from p to v. Step 1: For each edge e = eαe1 of X(1) outside of T, let ae be the loop in X at p defined by ae' := tΦαe(-1) ∗ be ∗ tΦαe(1)rev, where be := Φαe ∘ ρ is the path in X from Φαe(-1) to Φαe(1) that traverses the edge e. Let ae := [ae']. Then π1(X(1),p) = F({ae | e is an edge of X outside of T}). Step 2: For each face f = eαf2 of X(2), let rf'' := tsf(0) ∗ sf ∗ tsf(1)rev. By inserting and\/or deleting path products with paths of the form e ∗ erev and erev ∗ e for edges e in T into rf'', create a path rf' that is a path product of paths of the form ae' or (ae')rev for edges e outside of T; that is, [rf'] =π1(X(1),p) rf for some word rf = ae1j1 ··· aemjm with m ≥ 0 and each ji ∈ {± 1}. Then π1(X,p) = π1(X(2),p) = \\langle {ae | e is an edge of X outside of T} | {rf = 1 | f is a face of X} \\rangle.   "
},
{
  "id": "def-5.235",
  "level": "2",
  "url": "sec-presenting-spaces.html#def-5.235",
  "type": "Definition",
  "number": "5.6.28",
  "title": "",
  "body": "  The presentation complex associated to a presentation \\langle A | R \\rangle of a group G is a CW complex with one vertex v, an edge ea for each a ∈ A (with attaching maps gluing both endpoints of ea to v), and a face fr for each r ∈ R with attaching map determined by following the edges according to the word r.   "
},
{
  "id": "thm-5.236",
  "level": "2",
  "url": "sec-presenting-spaces.html#thm-5.236",
  "type": "Theorem",
  "number": "5.6.29",
  "title": "\"2-Way Street Thm\".",
  "body": "\"2-Way Street Thm\"   For every group G, there is a 2-dimensional PC CW complex X with π1(X) ≅ G. Moreover, if \\langle A | R \\rangle is a presentation of G and Y is the associated presentation complex, then π1(Y) ≅ G.   "
},
{
  "id": "sec-liting",
  "level": "1",
  "url": "sec-liting.html",
  "type": "Section",
  "number": "6.1",
  "title": "Definitions and Lifting",
  "body": "Definitions and Lifting  Definition    A covering space of a topological space X is a space X̃ together with a continuous function p: X̃ → X satisfying: There is an open covering {Uα} of X such that for all α the preimage p-1(Uα) is a disjoint union of open sets in X̃, each of which is mapped (by the restriction of p) homeomorphically onto Uα. Each set Uα is called evenly covered.     Examples    Lifting Theorems  PPHLT = Path and Path Homotopy Lifting Theorems   Let p: (X̃,x̃0) → (X,x0) be a covering space.  PLT  Given a path f: (I,0) → (X,x0), there is a unique path f̃: (I,0) → (X̃,x̃0) such that p ∘ f̃ = f.   PHLT  Given a path homotopy H: (I × I,(0,0)) → (X,x0), there is a unique path homotopy H̃: (I × I,(0,0)) → (X̃,x̃0) such that p ∘ H̃ = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) → (X,x0), then H̃ is a path homotopy between the \"lifts\" f̃,g̃: (I,0) → (X̃,x̃0) of f,g from the PLT.         (LC+ULP = Lifting Criterion and Unique Lifting Property): Let p: (X̃,x̃0) → (X,x0) be a covering space, let Y be a PC and LPC space, and let f: (Y,y0) → (X,x0) be continuous.   If f∗(π1(Y,y0)) ⊆ p∗(π1(X̃,x̃0)), then there is a unique continuous function f̃: (Y,y0) → (X̃,x̃0) such that p ∘ f̃ = f.    If f∗(π1(Y,y0)) ⊈ p∗(π1(X̃,x̃0)), then there does not exist a continuous lift f̃: (Y,y0) → (X̃,x̃0) such that p ∘ f̃ = f.         If p: (X̃,x̃0) → (X,x0) is a covering space, then the induced homomorphism p∗: π1(X̃,x̃0) → π1(X,x0) is injective (that is, Ker p∗ = {1π1(X̃,x̃0)}), and the image satisfies Im p∗ = p∗(π1(X̃,x̃0)) = {[f] ∈ π1(X,x0) | the lift f̃ of f at x̃0 is a loop in X̃}. Consequently, π1(X̃,x̃0) is isomorphic to a subgroup of π1(X,x0).     Application to group theory       For all n ∈ ℕ, the free group Fn is a subgroup of F2.    The free group F(S) on a countably infinite set S is a subgroup of F2.        The number of sheets    Let p: (X̃,x̃0) → (X,x0) be a covering space such that X and X̃ are PC. The number of sheets of the covering space is |p-1({x0})|.    Lifting Correspondence   Let p: (X̃,x̃0) → (X,x0) be a covering space such that X and X̃ are PC. Then:   The Lifting Correspondence Function Φ: π1(X,x0)\/p∗(π1(X̃,x̃0)) → p-1({x0}) defined by Φ(p∗(π1(X̃,x̃0))[f]) := f̃(1), where f̃ is the unique lift of the loop f to a path in X̃ starting at x̃0, is a well-defined bijection.    For all points x' ∈ X, |p-1({x'})| = |p-1({x0})| = (the number of sheets of p) = the index of p∗(π1(X̃,x̃0)) in π1(X,x0).        Examples    Interactions with functions and constructions:    If p:X̃ → X is a covering space, then p is an open map.      Let p:X̃ → X be a covering space. If A is a subspace of X and Ã := p-1(A), then the restriction p|AÃ:Ã → A is also a covering space.      Let pi:X̃i → Xi be covering spaces for i ∈ {1,2}. Then q := (p1 ∘ proj1,p2 ∘ proj2) :X̃1 × X̃2 → X1 × X2 [that is, q(s1,s2) := (p1(s1),p2(s2)) for all (s1,s2) ∈ X̃1 × X̃2] is also a covering space.     Interactions with homeomorphism invariants:    Let p:X̃ → X be a covering space. If X is a CW complex, then X̃ is a CW complex. Moreover, p maps open n-cells to open n-cells for all n.      Let p:X̃ → X be a covering space satisfying the property that p-1({s}) is finite and nonempty for all s ∈ X. The space X̃ is compact and T2 if and only if the space X is compact and T2.     "
},
{
  "id": "def-6.1",
  "level": "2",
  "url": "sec-liting.html#def-6.1",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A covering space of a topological space X is a space X̃ together with a continuous function p: X̃ → X satisfying: There is an open covering {Uα} of X such that for all α the preimage p-1(Uα) is a disjoint union of open sets in X̃, each of which is mapped (by the restriction of p) homeomorphically onto Uα. Each set Uα is called evenly covered.   "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-liting.html#example-36",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.3",
  "level": "2",
  "url": "sec-liting.html#thm-6.3",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "PPHLT = Path and Path Homotopy Lifting Theorems.",
  "body": "PPHLT = Path and Path Homotopy Lifting Theorems   Let p: (X̃,x̃0) → (X,x0) be a covering space.  PLT  Given a path f: (I,0) → (X,x0), there is a unique path f̃: (I,0) → (X̃,x̃0) such that p ∘ f̃ = f.   PHLT  Given a path homotopy H: (I × I,(0,0)) → (X,x0), there is a unique path homotopy H̃: (I × I,(0,0)) → (X̃,x̃0) such that p ∘ H̃ = H. Moreover, if H is a path homotopy between two paths f,g: (I,0) → (X,x0), then H̃ is a path homotopy between the \"lifts\" f̃,g̃: (I,0) → (X̃,x̃0) of f,g from the PLT.      "
},
{
  "id": "thm-6.4",
  "level": "2",
  "url": "sec-liting.html#thm-6.4",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": "  (LC+ULP = Lifting Criterion and Unique Lifting Property): Let p: (X̃,x̃0) → (X,x0) be a covering space, let Y be a PC and LPC space, and let f: (Y,y0) → (X,x0) be continuous.   If f∗(π1(Y,y0)) ⊆ p∗(π1(X̃,x̃0)), then there is a unique continuous function f̃: (Y,y0) → (X̃,x̃0) such that p ∘ f̃ = f.    If f∗(π1(Y,y0)) ⊈ p∗(π1(X̃,x̃0)), then there does not exist a continuous lift f̃: (Y,y0) → (X̃,x̃0) such that p ∘ f̃ = f.      "
},
{
  "id": "thm-6.6",
  "level": "2",
  "url": "sec-liting.html#thm-6.6",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "",
  "body": "  If p: (X̃,x̃0) → (X,x0) is a covering space, then the induced homomorphism p∗: π1(X̃,x̃0) → π1(X,x0) is injective (that is, Ker p∗ = {1π1(X̃,x̃0)}), and the image satisfies Im p∗ = p∗(π1(X̃,x̃0)) = {[f] ∈ π1(X,x0) | the lift f̃ of f at x̃0 is a loop in X̃}. Consequently, π1(X̃,x̃0) is isomorphic to a subgroup of π1(X,x0).   "
},
{
  "id": "cor-6.7",
  "level": "2",
  "url": "sec-liting.html#cor-6.7",
  "type": "Corollary",
  "number": "6.1.6",
  "title": "",
  "body": "     For all n ∈ ℕ, the free group Fn is a subgroup of F2.    The free group F(S) on a countably infinite set S is a subgroup of F2.      "
},
{
  "id": "def-6.10",
  "level": "2",
  "url": "sec-liting.html#def-6.10",
  "type": "Definition",
  "number": "6.1.7",
  "title": "",
  "body": "  Let p: (X̃,x̃0) → (X,x0) be a covering space such that X and X̃ are PC. The number of sheets of the covering space is |p-1({x0})|.   "
},
{
  "id": "thm-6.11",
  "level": "2",
  "url": "sec-liting.html#thm-6.11",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "Lifting Correspondence.",
  "body": "Lifting Correspondence   Let p: (X̃,x̃0) → (X,x0) be a covering space such that X and X̃ are PC. Then:   The Lifting Correspondence Function Φ: π1(X,x0)\/p∗(π1(X̃,x̃0)) → p-1({x0}) defined by Φ(p∗(π1(X̃,x̃0))[f]) := f̃(1), where f̃ is the unique lift of the loop f to a path in X̃ starting at x̃0, is a well-defined bijection.    For all points x' ∈ X, |p-1({x'})| = |p-1({x0})| = (the number of sheets of p) = the index of p∗(π1(X̃,x̃0)) in π1(X,x0).      "
},
{
  "id": "example-37",
  "level": "2",
  "url": "sec-liting.html#example-37",
  "type": "Example",
  "number": "6.1.9",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.18",
  "level": "2",
  "url": "sec-liting.html#thm-6.18",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": "  If p:X̃ → X is a covering space, then p is an open map.   "
},
{
  "id": "thm-6.20",
  "level": "2",
  "url": "sec-liting.html#thm-6.20",
  "type": "Theorem",
  "number": "6.1.11",
  "title": "",
  "body": "  Let p:X̃ → X be a covering space. If A is a subspace of X and Ã := p-1(A), then the restriction p|AÃ:Ã → A is also a covering space.   "
},
{
  "id": "thm-6.21",
  "level": "2",
  "url": "sec-liting.html#thm-6.21",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "",
  "body": "  Let pi:X̃i → Xi be covering spaces for i ∈ {1,2}. Then q := (p1 ∘ proj1,p2 ∘ proj2) :X̃1 × X̃2 → X1 × X2 [that is, q(s1,s2) := (p1(s1),p2(s2)) for all (s1,s2) ∈ X̃1 × X̃2] is also a covering space.   "
},
{
  "id": "cor-6.25",
  "level": "2",
  "url": "sec-liting.html#cor-6.25",
  "type": "Corollary",
  "number": "6.1.13",
  "title": "",
  "body": "  Let p:X̃ → X be a covering space. If X is a CW complex, then X̃ is a CW complex. Moreover, p maps open n-cells to open n-cells for all n.   "
},
{
  "id": "thm-6.27",
  "level": "2",
  "url": "sec-liting.html#thm-6.27",
  "type": "Theorem",
  "number": "6.1.14",
  "title": "",
  "body": "  Let p:X̃ → X be a covering space satisfying the property that p-1({s}) is finite and nonempty for all s ∈ X. The space X̃ is compact and T2 if and only if the space X is compact and T2.   "
},
{
  "id": "sec-actions",
  "level": "1",
  "url": "sec-actions.html",
  "type": "Section",
  "number": "6.2",
  "title": "Building Covering Spaces Using Group Actions",
  "body": "Building Covering Spaces Using Group Actions  Covering space group actions    Given a group G and a topological space Y, an action of G on Y (or \"action of G on Y by homeomorphisms\") is a homomorphism ρ:G → Homeo(Y), where Homeo(Y) is the group of homeomorphisms :Y → Y with group operation given by composition. For each g ∈ G and y ∈ Y, denote g · y := (ρ(g))(y).      Given an action of a group G on a space Y, let ∼G be the equivalence relation on Y defined by [y ∼G y' iff there is a g ∈ G with g · y = y'] for all y,y' ∈ Y. For each y ∈ Y, the equivalence class [y] = [y]G = G · y is called the orbit of y. The quotient space Y\/∼ is called the orbit space of the group action and denoted Y\/G.      A covering space action of a group G on a space Y is an action satisfying: For each y ∈ Y there is an open set Uy in Y containing y such that whenever g,g' ∈ G and (g · Uy) ∩ (g' · Uy) ≠ ∅ then g = g'.      If G has a covering space action on Y, then:   The quotient p:Y → Y\/G is a covering space.    If Y is PC and LPC and y0 ∈ Y, then p∗(π1(Y,y0)) ⊴ π1(Y\/G,[y0]) and G ≅ π1(Y\/G,[y0]) \/ p∗(π1(Y,y0)).         If Y is an SC CW complex and G acts on Y with a covering space action, then π1(Y\/G) ≅ G.     Building SC covering spaces from group presentations    Let \\langle A | R \\rangle be a presentation of a group G. The Cayley complex of this presentation is the CW complex X̃ constructed by: X̃(0) = G. The set of edges is in bijection with G × A; for each g ∈ G and a ∈ A, the attaching map of the edge eg,a is φg,a(-1) = g and φg,a(1) = ga. The set of faces is in bijection with G × R; for each g ∈ G and r ∈ R, the attaching map φg,r of the face fg,r satisfies φg,r ∘ ω := edge path in X̃(1) starting at g labeled by r. The 1-skeleton X̃(1) is the Cayley graph of G with respect to A.      Let \\langle A | R \\rangle be a presentation of a group G, let X̃ be the Cayley complex, and let X be the presentation complex. Then   the action of G on X̃, given by g · h := (gh), g · eh,a := e(gh),a, and g · fh,r := f(gh),r for all h ∈ G, a∈ A, and r ∈ R, is a covering space action;    X̃ is a SC CW complex (and hence PC, LPC, and SLSC), and hence π1(X̃\/G) ≅ G; and    X̃\/G ≅ X.        Examples    Existence of covering spaces    Let X be a PC, LPC, SLSC space and x0 ∈ X. Then:   (SC Covering Space Thm): There is a SC covering space p:(X̃,x̃0) → (X,x0), and there is covering space group action of G := π1(X,x0) on X̃ that induces p; hence (X̃\/G,[x̃0]) ≅ (X,x0). Moreover, if X is a CW complex, then X̃ is a CW complex, and for each open n-cell σ of X there are |G| open n-cells of X̃ mapping via p to σ such that the action of each g ∈ G on X̃ permutes these n-cells.    (Covering Space Existence Thm): For each subgroup H < π1(X,x0), there is a covering space rH: (X̃\/H,[x̃0]H) → (X,x0) such that rH ∘ qH = p, where qH: X̃ → X̃\/H is the quotient map, and H = rH∗(π1(X̃\/H,[x̃0]H)).        Examples     If (X,x0) is a PC, LPC, SLSC space or PC CW complex, H < π1(X,x0), and rH:(X̃\/H,[x̃0]H) → (X,x0) is the covering space of Thm 6.60(b), then the number of sheets of this covering space is the index of H in π1(X,x0).     Building covering spaces for subgroups from group presentations    Let \\langle A | R \\rangle be a presentation of a group G and let X be the presentation complex with vertex x0. Let H < G.   (Top-down Method): Let X̃ be the Cayley complex of the presentation with quotient map p:X̃ → X. Then H has a covering space action on X̃, with quotient map qH:X̃ → X̃\/H, and the covering space rH:X̃\/H → X defined by rH([s]H) := p(s) for all [s]H ∈ X̃\/H satisfies Im rH∗ = H.    (Bottom-up Method): Let Z be the CW complex constructed by: Z(0) := H\\G (the set of right cosets of H in G). The set of edges of Z is in bijection with H\\G × A; for each Hg ∈ H\\G and a ∈ A, the attaching map of the edge eHg,a is φHg,a(-1) = Hg and φHg,a(1) = Hga. The set of faces of Z is in bijection with H\\G × R; for each Hg ∈ H\\G and r ∈ R, the attaching map φHg,r of the face fHg,r satisfies φHg,r ∘ ω := edge path in Z(1) starting at Hg labeled by r. Then r:Z → X such that r(Hg) = x0, r(eHg,a) = the edge of X corresponding to a, and r(fHg,r) = the face of X corresponding to r (for all Hg, a, and r) is a covering space and Im r∗ = H.        Applications to group theory    Every subgroup of a free group is a free group.      Let H be a finite index subgroup of a group G.   If G is a finitely generated group, then H is also finitely generated.    If G is a finitely presented group, then H is also finitely presented.        "
},
{
  "id": "def-6.40",
  "level": "2",
  "url": "sec-actions.html#def-6.40",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  Given a group G and a topological space Y, an action of G on Y (or \"action of G on Y by homeomorphisms\") is a homomorphism ρ:G → Homeo(Y), where Homeo(Y) is the group of homeomorphisms :Y → Y with group operation given by composition. For each g ∈ G and y ∈ Y, denote g · y := (ρ(g))(y).   "
},
{
  "id": "def-6.42",
  "level": "2",
  "url": "sec-actions.html#def-6.42",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "  Given an action of a group G on a space Y, let ∼G be the equivalence relation on Y defined by [y ∼G y' iff there is a g ∈ G with g · y = y'] for all y,y' ∈ Y. For each y ∈ Y, the equivalence class [y] = [y]G = G · y is called the orbit of y. The quotient space Y\/∼ is called the orbit space of the group action and denoted Y\/G.   "
},
{
  "id": "def-6.44",
  "level": "2",
  "url": "sec-actions.html#def-6.44",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": "  A covering space action of a group G on a space Y is an action satisfying: For each y ∈ Y there is an open set Uy in Y containing y such that whenever g,g' ∈ G and (g · Uy) ∩ (g' · Uy) ≠ ∅ then g = g'.   "
},
{
  "id": "thm-6.45",
  "level": "2",
  "url": "sec-actions.html#thm-6.45",
  "type": "Theorem",
  "number": "6.2.4",
  "title": "",
  "body": "  If G has a covering space action on Y, then:   The quotient p:Y → Y\/G is a covering space.    If Y is PC and LPC and y0 ∈ Y, then p∗(π1(Y,y0)) ⊴ π1(Y\/G,[y0]) and G ≅ π1(Y\/G,[y0]) \/ p∗(π1(Y,y0)).      "
},
{
  "id": "cor-6.46",
  "level": "2",
  "url": "sec-actions.html#cor-6.46",
  "type": "Corollary",
  "number": "6.2.5",
  "title": "",
  "body": "  If Y is an SC CW complex and G acts on Y with a covering space action, then π1(Y\/G) ≅ G.   "
},
{
  "id": "def-6.50",
  "level": "2",
  "url": "sec-actions.html#def-6.50",
  "type": "Definition",
  "number": "6.2.6",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G. The Cayley complex of this presentation is the CW complex X̃ constructed by: X̃(0) = G. The set of edges is in bijection with G × A; for each g ∈ G and a ∈ A, the attaching map of the edge eg,a is φg,a(-1) = g and φg,a(1) = ga. The set of faces is in bijection with G × R; for each g ∈ G and r ∈ R, the attaching map φg,r of the face fg,r satisfies φg,r ∘ ω := edge path in X̃(1) starting at g labeled by r. The 1-skeleton X̃(1) is the Cayley graph of G with respect to A.   "
},
{
  "id": "thm-6.52",
  "level": "2",
  "url": "sec-actions.html#thm-6.52",
  "type": "Theorem",
  "number": "6.2.7",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G, let X̃ be the Cayley complex, and let X be the presentation complex. Then   the action of G on X̃, given by g · h := (gh), g · eh,a := e(gh),a, and g · fh,r := f(gh),r for all h ∈ G, a∈ A, and r ∈ R, is a covering space action;    X̃ is a SC CW complex (and hence PC, LPC, and SLSC), and hence π1(X̃\/G) ≅ G; and    X̃\/G ≅ X.      "
},
{
  "id": "example-38",
  "level": "2",
  "url": "sec-actions.html#example-38",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "thm-6.60",
  "level": "2",
  "url": "sec-actions.html#thm-6.60",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "",
  "body": "  Let X be a PC, LPC, SLSC space and x0 ∈ X. Then:   (SC Covering Space Thm): There is a SC covering space p:(X̃,x̃0) → (X,x0), and there is covering space group action of G := π1(X,x0) on X̃ that induces p; hence (X̃\/G,[x̃0]) ≅ (X,x0). Moreover, if X is a CW complex, then X̃ is a CW complex, and for each open n-cell σ of X there are |G| open n-cells of X̃ mapping via p to σ such that the action of each g ∈ G on X̃ permutes these n-cells.    (Covering Space Existence Thm): For each subgroup H < π1(X,x0), there is a covering space rH: (X̃\/H,[x̃0]H) → (X,x0) such that rH ∘ qH = p, where qH: X̃ → X̃\/H is the quotient map, and H = rH∗(π1(X̃\/H,[x̃0]H)).      "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-actions.html#example-39",
  "type": "Example",
  "number": "6.2.10",
  "title": "",
  "body": " Examples  "
},
{
  "id": "cor-6.67",
  "level": "2",
  "url": "sec-actions.html#cor-6.67",
  "type": "Corollary",
  "number": "6.2.11",
  "title": "",
  "body": "  If (X,x0) is a PC, LPC, SLSC space or PC CW complex, H < π1(X,x0), and rH:(X̃\/H,[x̃0]H) → (X,x0) is the covering space of Thm 6.60(b), then the number of sheets of this covering space is the index of H in π1(X,x0).   "
},
{
  "id": "thm-6.70",
  "level": "2",
  "url": "sec-actions.html#thm-6.70",
  "type": "Theorem",
  "number": "6.2.12",
  "title": "",
  "body": "  Let \\langle A | R \\rangle be a presentation of a group G and let X be the presentation complex with vertex x0. Let H < G.   (Top-down Method): Let X̃ be the Cayley complex of the presentation with quotient map p:X̃ → X. Then H has a covering space action on X̃, with quotient map qH:X̃ → X̃\/H, and the covering space rH:X̃\/H → X defined by rH([s]H) := p(s) for all [s]H ∈ X̃\/H satisfies Im rH∗ = H.    (Bottom-up Method): Let Z be the CW complex constructed by: Z(0) := H\\G (the set of right cosets of H in G). The set of edges of Z is in bijection with H\\G × A; for each Hg ∈ H\\G and a ∈ A, the attaching map of the edge eHg,a is φHg,a(-1) = Hg and φHg,a(1) = Hga. The set of faces of Z is in bijection with H\\G × R; for each Hg ∈ H\\G and r ∈ R, the attaching map φHg,r of the face fHg,r satisfies φHg,r ∘ ω := edge path in Z(1) starting at Hg labeled by r. Then r:Z → X such that r(Hg) = x0, r(eHg,a) = the edge of X corresponding to a, and r(fHg,r) = the face of X corresponding to r (for all Hg, a, and r) is a covering space and Im r∗ = H.      "
},
{
  "id": "thm-6.75",
  "level": "2",
  "url": "sec-actions.html#thm-6.75",
  "type": "Theorem",
  "number": "6.2.13",
  "title": "",
  "body": "  Every subgroup of a free group is a free group.   "
},
{
  "id": "thm-6.77",
  "level": "2",
  "url": "sec-actions.html#thm-6.77",
  "type": "Theorem",
  "number": "6.2.14",
  "title": "",
  "body": "  Let H be a finite index subgroup of a group G.   If G is a finitely generated group, then H is also finitely generated.    If G is a finitely presented group, then H is also finitely presented.      "
},
{
  "id": "sec-galois-cor",
  "level": "1",
  "url": "sec-galois-cor.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Universal Covering and Galois correspondence",
  "body": "The Universal Covering and Galois correspondence    An isomorphism of pointed covering spaces pi: (Yi,yi) → (X,x0) for i=1,2 is a homeomorphism f:(Y1,y1) → (Y2,y2) such that p2 ∘ f = p1.    Covering Space Uniqueness Theorem   Any two PC, LPC pointed covering spaces pi: (Yi,yi) → (X,x0) (for i=1,2) of a pointed space (X,x0) satisfy p1∗(Y1,y1) = p2∗(Y2,y2) iff the pointed covering spaces are isomorphic.      Let X be a PC, LPC, SLSC space. The universal covering space of X is the unique covering space p:X̃ → X such that X̃ is SC.      A deck transformation of a covering space p:X̃ → X is a homeomorphism f:X̃ → X̃ such that p ∘ f = p.      A covering space p:X̃ → X is normal if for all y,y' ∈ X̃ with p(y) = p(y'), there is a deck transformation f:(X̃,y) → (X̃,y').      Let (X,x0) be a PC, LPC, SLSC space, let G := π1(X,x0), and let p: (X̃,x̃0) → (X,x0) be the SC covering. Let r: (Z,z0) → (X,x0) be any PC covering space. Then:  Galois Correspondence Thm  The maps {subgroups H of G} ↔ {isomorphism classes of PC pointed coverings of (X,x0)} defined by H → (rH: (X̃\/H,[x̃0]H) → (X,x0)) and (t: (Y,y0) → (X,x0)) → Im t∗ = t∗(π1(Y,y0)) are inverse bijections.   Universal Covering Thm  There is a covering space map q: X̃ → Z such that r ∘ q = p.   Action Thm  Let H := r∗(π1(Z,z0)) and let NG(H) := the normalizer of H in G := { g ∈ G | gHg-1 ⊆ H }. The group of deck transformations of r: Z → X is isomorphic to NG(H)\/H and has a covering space action on Z. Moreover, (H is normal in G) iff (G\/H has a covering space action on Z inducing r) iff (the covering space r:Z → X is normal).        A Galois correspondence table has columns for spaces, fundamental groups, and covering space group actions. Each row of contains a space X, π1(X), and the (deck transformation) group that acts on X with covering space group action (and is maximal with respect to that property). In the column of spaces, a space Y appears in a row above a space X if there is a covering space : Y → X.    Examples   "
},
{
  "id": "def-6.80",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.80",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  An isomorphism of pointed covering spaces pi: (Yi,yi) → (X,x0) for i=1,2 is a homeomorphism f:(Y1,y1) → (Y2,y2) such that p2 ∘ f = p1.   "
},
{
  "id": "thm-6.81",
  "level": "2",
  "url": "sec-galois-cor.html#thm-6.81",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "Covering Space Uniqueness Theorem.",
  "body": "Covering Space Uniqueness Theorem   Any two PC, LPC pointed covering spaces pi: (Yi,yi) → (X,x0) (for i=1,2) of a pointed space (X,x0) satisfy p1∗(Y1,y1) = p2∗(Y2,y2) iff the pointed covering spaces are isomorphic.   "
},
{
  "id": "def-6.82",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.82",
  "type": "Definition",
  "number": "6.3.3",
  "title": "",
  "body": "  Let X be a PC, LPC, SLSC space. The universal covering space of X is the unique covering space p:X̃ → X such that X̃ is SC.   "
},
{
  "id": "def-6.85",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.85",
  "type": "Definition",
  "number": "6.3.4",
  "title": "",
  "body": "  A deck transformation of a covering space p:X̃ → X is a homeomorphism f:X̃ → X̃ such that p ∘ f = p.   "
},
{
  "id": "def-6.86",
  "level": "2",
  "url": "sec-galois-cor.html#def-6.86",
  "type": "Definition",
  "number": "6.3.5",
  "title": "",
  "body": "  A covering space p:X̃ → X is normal if for all y,y' ∈ X̃ with p(y) = p(y'), there is a deck transformation f:(X̃,y) → (X̃,y').   "
},
{
  "id": "thm-6.88",
  "level": "2",
  "url": "sec-galois-cor.html#thm-6.88",
  "type": "Theorem",
  "number": "6.3.6",
  "title": "",
  "body": "  Let (X,x0) be a PC, LPC, SLSC space, let G := π1(X,x0), and let p: (X̃,x̃0) → (X,x0) be the SC covering. Let r: (Z,z0) → (X,x0) be any PC covering space. Then:  Galois Correspondence Thm  The maps {subgroups H of G} ↔ {isomorphism classes of PC pointed coverings of (X,x0)} defined by H → (rH: (X̃\/H,[x̃0]H) → (X,x0)) and (t: (Y,y0) → (X,x0)) → Im t∗ = t∗(π1(Y,y0)) are inverse bijections.   Universal Covering Thm  There is a covering space map q: X̃ → Z such that r ∘ q = p.   Action Thm  Let H := r∗(π1(Z,z0)) and let NG(H) := the normalizer of H in G := { g ∈ G | gHg-1 ⊆ H }. The group of deck transformations of r: Z → X is isomorphic to NG(H)\/H and has a covering space action on Z. Moreover, (H is normal in G) iff (G\/H has a covering space action on Z inducing r) iff (the covering space r:Z → X is normal).      "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-galois-cor.html#remark-23",
  "type": "Remark",
  "number": "6.3.7",
  "title": "",
  "body": " A Galois correspondence table has columns for spaces, fundamental groups, and covering space group actions. Each row of contains a space X, π1(X), and the (deck transformation) group that acts on X with covering space group action (and is maximal with respect to that property). In the column of spaces, a space Y appears in a row above a space X if there is a covering space : Y → X.  "
},
{
  "id": "example-40",
  "level": "2",
  "url": "sec-galois-cor.html#example-40",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": " Examples  "
},
{
  "id": "sec-simplicial",
  "level": "1",
  "url": "sec-simplicial.html",
  "type": "Section",
  "number": "7.1",
  "title": "Simplicial homology",
  "body": "Simplicial homology  Overview of Homotopy and Homology    Let X be a topological space and x0 ∈ X, and let n ≥ 1 be a natural number. The n-th homotopy group of X at x0, denoted πn(X,x0), is the set of homotopy classes of maps (In,Bdℝn(In)) → (X,x0) with group operation defined by [f][g] = [f ∗ g] for all [f],[g] ∈ πn(X,x0).      Let X be a space and x0 ∈ X. For all n ≥ 2, the group πn(X,x0) is abelian.    Motivation: For dimensions n ≥ 2, the group πn(X,x0) is often difficult to compute. Instead, define abelian groups Hn(X) for all n ≥ 0 that capture much of the same information.  Motivation: Define homology groups 3 ways: simplicial homology HnΔ on Δ-complexes, cellular homology HnCW on CW-complexes, and singular homology Hnsing on topological spaces. {Δ-complexes} ⊊ {CW complexes} ⊊ {topological spaces}. HnΔ is easiest to compute, HnCW is harder to compute but easier to find the complex structure, and Hnsing is hardest to compute but easiest to use for proving theorems. For a Δ-complex X, HnΔ(X) = HnCW(X) = Hnsing(X). HnΔ, HnCW, and Hnsing are all homotopy invariants.   Δ-Complexes    In ℝn+1, the i-th standard basis vector is εi(n) := (0,0,...,0,1,0,...,0), where the coordinates are indexed by 0,...,n and the 1 appears in the i-th coordinate.      The standard n-simplex is the subspace of ℝn+1 (with the Euclidean topology) given by Δn := {∑i=0n tiεi(n) | ∑i=0n ti = 1 and 0 ≤ ti ≤ 1 for all i}.      The boundary of the standard n-simplex is the subspace ∂Δn := {∑i=0n tiεi(n) | ∑i=0n ti = 1, 0 ≤ ti ≤ 1 for all i, and tj = 0 for some j}. The open n-simplex is the subspace 0Δn := Δn - ∂ Δn for n ≥ 1, and 0Δ0 := Δ0.      For 0 ≤ i ≤ n, the i-th face map of the standard n-simplex is the function Fi(n): Δn-1 ↪ Δn defined by Fi(n)(∑i=0n-1 tiεi(n-1)) := ∑j=0i-1 tjεj(n) + ∑j=i+1n tj-1εj(n).      A Δ-complex is a topological space X constructed inductively by: Let X(0) be a set of points with the discrete topology. Write X(0) = ∐α ∈ J0 Δα0, where for each α, Δα0 ≅ Δ0. For each α ∈ J0, let σ̄α0: Δα0 → X(0) be the inclusion map. For each n ≥ 1, form the space X(n) from X(n-1) by: For each α in an index set Jn, let Δαn be a copy of the standard n-simplex Δn, and let sα: ∂Δαn → X(n-1) be a continuous function such that for all 0 ≤ i ≤ n, sα ∘ Fi(n)|∂Δn = σ̄βn-1 for some β ∈ Jn-1. Let Zn := X(n-1) ∐ (∐α ∈ Jn Δαn) have the disjoint union topology, and let ∼ be the minimal equivalence relation on this space such that d ∼ sα(d) for all d ∈ ∂Δαn and α ∈ Jn. Define X(n) be the quotient space and let qn be the quotient map. Define σ̄αn: Δαn → X(n) to be the composition σ̄αn := qn ∘ iΔαnZn where iΔαnZn: Δαn → Zn is the inclusion map. Let X := ∪n ∈ ℕ X(n) (where each X(n) is identified with its image in X(n+1)). For all n and for all α ∈ Jn, define σαn = σα: Δαn → X by σαn := iX(n)X ∘ σ̄αn where iX(n)X: X(n) → X is the inclusion. A subset A of X is defined to be open in X if and only if (σαn)-1(A) is open in Δαn for all n ≥ 0 and all α ∈ Jn. Each σαn is called an n-simplex of X.      Every Δ-complex is a CW complex.      A topological space X has a Δ-complex structure if and only if there is a collection of continuous maps 𝒞 = {σα:Δnα → X} such that: (1) Each restriction σα|(0Δnα) is an embedding and each point of X is in the image of exactly one σα| (0Δnα). (2) Each σα ∘ Fi(nα) is a map σβ: Δnα-1 → X in 𝒞. (3) A subset A of X is open in X if and only if σα-1(A) is open in Δnα for all σα in 𝒞.     Simplicial Homology    Let X be a Δ-complex and let n ≥ 0. The group of simplicial n-chains of X is CnΔ(X) := ⊕α ∈ Jn ℤ = ⊕n-simplices σα ℤσα. An element of CnΔ(X) is called a (simplicial) n-chain, and written ∑α ∈ Jn mασα, where each mα ∈ ℤ and all but finitely many mα's are 0.      Let X be a Δ-complex and let n ≥ 1. The n-th simplicial boundary map is the group homomorphism ∂nΔ = ∂n: CnΔ(X) → Cn-1Δ(X) defined by ∂n(∑α ∈ Jn mασα) := ∑α ∈ Jn mα∂n(1σα) and ∂n(1σα) := ∑i=0n (-1)i σα ∘ Fi(n). The 0-th simplicial boundary map is the group homomorphism ∂0Δ = ∂0: C0Δ(X) → 0.      If X is a Δ-complex and n ≥ 1, then Im ∂n+1Δ ⊆ Ker ∂nΔ.      Let X be a Δ-complex and let n ≥ 0. The n-th simplicial homology group of X is the group HnΔ(X) := Ker ∂nΔ \/ Im ∂n+1Δ.     A quotient of the form ℤn\/ℤm is not well-defined. In order to compute this quotient, write the elements of a basis of ℤm as linear combinations of the elements of a basis of ℤn: compute the Smith normal form.     Let {a1,...,ak}, viewed as an ordered list, be a basis for ℤk. Then each of the following operations creates another basis for this group:   Swap two of the basis elements (ai ↔ aj).    Multiply a basis element by -1 (ai → -ai).    Add an integral multiple of one basis element to another (ai → ai+maj).        "
},
{
  "id": "def-7.1",
  "level": "2",
  "url": "sec-simplicial.html#def-7.1",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  Let X be a topological space and x0 ∈ X, and let n ≥ 1 be a natural number. The n-th homotopy group of X at x0, denoted πn(X,x0), is the set of homotopy classes of maps (In,Bdℝn(In)) → (X,x0) with group operation defined by [f][g] = [f ∗ g] for all [f],[g] ∈ πn(X,x0).   "
},
{
  "id": "thm-7.2",
  "level": "2",
  "url": "sec-simplicial.html#thm-7.2",
  "type": "Theorem",
  "number": "7.1.2",
  "title": "",
  "body": "  Let X be a space and x0 ∈ X. For all n ≥ 2, the group πn(X,x0) is abelian.   "
},
{
  "id": "def-7.10",
  "level": "2",
  "url": "sec-simplicial.html#def-7.10",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": "  In ℝn+1, the i-th standard basis vector is εi(n) := (0,0,...,0,1,0,...,0), where the coordinates are indexed by 0,...,n and the 1 appears in the i-th coordinate.   "
},
{
  "id": "def-7.11",
  "level": "2",
  "url": "sec-simplicial.html#def-7.11",
  "type": "Definition",
  "number": "7.1.4",
  "title": "",
  "body": "  The standard n-simplex is the subspace of ℝn+1 (with the Euclidean topology) given by Δn := {∑i=0n tiεi(n) | ∑i=0n ti = 1 and 0 ≤ ti ≤ 1 for all i}.   "
},
{
  "id": "def-7.12",
  "level": "2",
  "url": "sec-simplicial.html#def-7.12",
  "type": "Definition",
  "number": "7.1.5",
  "title": "",
  "body": "  The boundary of the standard n-simplex is the subspace ∂Δn := {∑i=0n tiεi(n) | ∑i=0n ti = 1, 0 ≤ ti ≤ 1 for all i, and tj = 0 for some j}. The open n-simplex is the subspace 0Δn := Δn - ∂ Δn for n ≥ 1, and 0Δ0 := Δ0.   "
},
{
  "id": "def-7.15",
  "level": "2",
  "url": "sec-simplicial.html#def-7.15",
  "type": "Definition",
  "number": "7.1.6",
  "title": "",
  "body": "  For 0 ≤ i ≤ n, the i-th face map of the standard n-simplex is the function Fi(n): Δn-1 ↪ Δn defined by Fi(n)(∑i=0n-1 tiεi(n-1)) := ∑j=0i-1 tjεj(n) + ∑j=i+1n tj-1εj(n).   "
},
{
  "id": "def-7.20",
  "level": "2",
  "url": "sec-simplicial.html#def-7.20",
  "type": "Definition",
  "number": "7.1.7",
  "title": "",
  "body": "  A Δ-complex is a topological space X constructed inductively by: Let X(0) be a set of points with the discrete topology. Write X(0) = ∐α ∈ J0 Δα0, where for each α, Δα0 ≅ Δ0. For each α ∈ J0, let σ̄α0: Δα0 → X(0) be the inclusion map. For each n ≥ 1, form the space X(n) from X(n-1) by: For each α in an index set Jn, let Δαn be a copy of the standard n-simplex Δn, and let sα: ∂Δαn → X(n-1) be a continuous function such that for all 0 ≤ i ≤ n, sα ∘ Fi(n)|∂Δn = σ̄βn-1 for some β ∈ Jn-1. Let Zn := X(n-1) ∐ (∐α ∈ Jn Δαn) have the disjoint union topology, and let ∼ be the minimal equivalence relation on this space such that d ∼ sα(d) for all d ∈ ∂Δαn and α ∈ Jn. Define X(n) be the quotient space and let qn be the quotient map. Define σ̄αn: Δαn → X(n) to be the composition σ̄αn := qn ∘ iΔαnZn where iΔαnZn: Δαn → Zn is the inclusion map. Let X := ∪n ∈ ℕ X(n) (where each X(n) is identified with its image in X(n+1)). For all n and for all α ∈ Jn, define σαn = σα: Δαn → X by σαn := iX(n)X ∘ σ̄αn where iX(n)X: X(n) → X is the inclusion. A subset A of X is defined to be open in X if and only if (σαn)-1(A) is open in Δαn for all n ≥ 0 and all α ∈ Jn. Each σαn is called an n-simplex of X.   "
},
{
  "id": "prop-7.22",
  "level": "2",
  "url": "sec-simplicial.html#prop-7.22",
  "type": "Proposition",
  "number": "7.1.8",
  "title": "",
  "body": "  Every Δ-complex is a CW complex.   "
},
{
  "id": "thm-7.24",
  "level": "2",
  "url": "sec-simplicial.html#thm-7.24",
  "type": "Theorem",
  "number": "7.1.9",
  "title": "",
  "body": "  A topological space X has a Δ-complex structure if and only if there is a collection of continuous maps 𝒞 = {σα:Δnα → X} such that: (1) Each restriction σα|(0Δnα) is an embedding and each point of X is in the image of exactly one σα| (0Δnα). (2) Each σα ∘ Fi(nα) is a map σβ: Δnα-1 → X in 𝒞. (3) A subset A of X is open in X if and only if σα-1(A) is open in Δnα for all σα in 𝒞.   "
},
{
  "id": "def-7.30",
  "level": "2",
  "url": "sec-simplicial.html#def-7.30",
  "type": "Definition",
  "number": "7.1.10",
  "title": "",
  "body": "  Let X be a Δ-complex and let n ≥ 0. The group of simplicial n-chains of X is CnΔ(X) := ⊕α ∈ Jn ℤ = ⊕n-simplices σα ℤσα. An element of CnΔ(X) is called a (simplicial) n-chain, and written ∑α ∈ Jn mασα, where each mα ∈ ℤ and all but finitely many mα's are 0.   "
},
{
  "id": "def-7.32",
  "level": "2",
  "url": "sec-simplicial.html#def-7.32",
  "type": "Definition",
  "number": "7.1.11",
  "title": "",
  "body": "  Let X be a Δ-complex and let n ≥ 1. The n-th simplicial boundary map is the group homomorphism ∂nΔ = ∂n: CnΔ(X) → Cn-1Δ(X) defined by ∂n(∑α ∈ Jn mασα) := ∑α ∈ Jn mα∂n(1σα) and ∂n(1σα) := ∑i=0n (-1)i σα ∘ Fi(n). The 0-th simplicial boundary map is the group homomorphism ∂0Δ = ∂0: C0Δ(X) → 0.   "
},
{
  "id": "lem-7.35",
  "level": "2",
  "url": "sec-simplicial.html#lem-7.35",
  "type": "Lemma",
  "number": "7.1.12",
  "title": "",
  "body": "  If X is a Δ-complex and n ≥ 1, then Im ∂n+1Δ ⊆ Ker ∂nΔ.   "
},
{
  "id": "def-7.36",
  "level": "2",
  "url": "sec-simplicial.html#def-7.36",
  "type": "Definition",
  "number": "7.1.13",
  "title": "",
  "body": "  Let X be a Δ-complex and let n ≥ 0. The n-th simplicial homology group of X is the group HnΔ(X) := Ker ∂nΔ \/ Im ∂n+1Δ.   "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-simplicial.html#remark-24",
  "type": "Remark",
  "number": "7.1.14",
  "title": "",
  "body": " A quotient of the form ℤn\/ℤm is not well-defined. In order to compute this quotient, write the elements of a basis of ℤm as linear combinations of the elements of a basis of ℤn: compute the Smith normal form.  "
},
{
  "id": "prop-7.40",
  "level": "2",
  "url": "sec-simplicial.html#prop-7.40",
  "type": "Proposition",
  "number": "7.1.15",
  "title": "",
  "body": "  Let {a1,...,ak}, viewed as an ordered list, be a basis for ℤk. Then each of the following operations creates another basis for this group:   Swap two of the basis elements (ai ↔ aj).    Multiply a basis element by -1 (ai → -ai).    Add an integral multiple of one basis element to another (ai → ai+maj).      "
},
{
  "id": "sec-sing-hom",
  "level": "1",
  "url": "sec-sing-hom.html",
  "type": "Section",
  "number": "7.2",
  "title": "Singular Homology",
  "body": "Singular Homology  Definitions and Induced Homomorphisms    Let X be a topological space. A singular n-simplex of X is a continuous function σ:Δn → X.      Let X be a topological space and let n ≥ 0. Let Sn be the set of singular n-simplices of X. The group of singular n-chains of X is Cnsing(X) = Cn(X) := ⊕singular n-simplices σ ℤ = ⊕singular n-simplices σ ℤσ. An element of Cnsing(X) is called a (singular) n-chain, and written ∑singular n-simplices σ mσσ, where each mσ ∈ ℤ and all but finitely many mσ's are 0.      Let X be a topological space and let n ≥ 1. The n-th singular boundary map is the group homomorphism ∂nsing = ∂nX = ∂n: Cnsing(X) → Cn-1sing(X) defined by ∂n(∑singular n-simplices σ mσσ) := ∑singular n-simplices σ mσ∂n(1σ) and ∂n(1σ) := ∑i=0n (-1)i σ ∘ Fi(n). The 0-th singular boundary map is the group homomorphism ∂0sing = ∂0: C0sing(X) → 0.      If X is a topological space and n ≥ 1, then Im ∂n+1sing ⊆ Ker ∂nsing.      Let X be a topological space and let n ≥ 0. The n-th singular homology group of X is the group Hnsing(X) = Hn(X) := Ker ∂nsing \/ Im ∂n+1sing.     Examples     If X is a space with exactly one point, then H0(X) = ℤ and Hn = 0 for all n ≥ 1.      If a space X has path components Xα, then Hnsing(X) = ⊕α Hnsing(Xα) for all n ≥ 0.      If X is a path-connected space, then H0sing(X) ≅ ℤ.    Excursion into homological algebra    A chain complex, denoted C•, is a sequence ⋯ → Cn+1 → Cn → Cn-1 → ⋯ C0 → 0 with group homomorphisms ∂nC = ∂n: Cn → Cn-1 and ∂0C = ∂0: C0 → 0 satisfying Im ∂n+1 ⊆ Ker ∂n for all n. An element of Ker ∂n is called an n-cycle and an element of Im ∂n+1 is an n-boundary. For n ≥ 0, the n-th homology group of C• is Hn(C•) := Ker ∂nC \/ Im ∂n+1C.      A chain map from a chain complex C• to a chain complex D•, written f♯:C• → D•, is a collection of group homomorphisms fn♯: Cn → Dn for all n ≥ 0 satisfying ∂nD ∘ fn♯ = fn-1♯ ∘ ∂nC for all n.      Let f♯:C• → D• be a chain map. The n-th homology homomorphism induced by f♯ is the function fn∗: Hn(C•) → Hn(D•) defined by fn∗(γ + Im ∂n+1C) := fn♯(γ) + Im ∂n+1D.      If f♯:C• → D• is a chain map, then the n-th homology homomorphism fn∗ induced by f♯ is a well-defined group homomorphism.      Two chain maps f♯,g♯: C• → D• are chain homotopic, written f♯ ≃ g♯, if there is a collection of group homomorphisms hn: Cn → Dn+1 satisfying gn - fn = ∂n+1D ∘ hn + hn-1 ∘ ∂nC for all n. The collection of functions {hn} is called a chain homotopy from f♯ to g♯.      If f♯,g♯: C• → D• are chain homotopic chain maps, then fn∗ = gn∗ for all n.      A chain map f♯: C• → D• is a chain homotopy equivalence if there is a chain map g♯: D• → C• such that f♯ ∘ g♯ ≃ 1D• and g♯ ∘ f♯ ≃ 1C•.      If f♯: C• → D• is a chain homotopy equivalence, then fn∗: Hn(C•) → Hn(D•) is an isomorphism for all n.       If X is a Δ-complex, then HnΔ(X) ≅ Hnsing(X) for all n ≥ 0.      If X is a topological space with two Δ-complex structures X' and X'', then HnΔ(X') ≅ HnΔ(X'') for all n ≥ 0.      Let X and Y be topological spaces and let f:X → Y be a continuous function, and let n ≥ 0. The n-th homology homomorphism induced by f is the homology homomorphism fn∗: Hn(X) → Hn(Y) induced by the (induced) chain map f♯: C•sing(X) → C•sing(Y) defined by fn♯(∑singular n-simplices σ of X mσσ) := ∑singular n-simplices σ of X mσ f ∘ σ.      If X and Y are topological spaces and f:X → Y is a continuous function, then the induced chain map f♯ is a well-defined chain map and hence the induced homology homomorphisms are well-defined homomorphisms.         If f: X → Y and g: Y → Z are continuous then (g ∘ f)n∗ = gn∗ ∘ fn∗ for all n.    (1X)n∗ = 1Hn(X) for all n.    If f and g are homotopic maps, then fn∗ = gn∗ for all n.         If X and Y are homotopy equivalent spaces (that is, X ≃ Y), then Hn(X) ≅ Hn(Y) for all n.     Examples     If X is a contractible space, then H0(X) ≅ ℤ and Hn(X) = 0 for all n ≥ 1.     Decomposing Spaces and Homology Groups  Motivation: Want an SVK theorem for homology  Another excursion into homological algebra:    A sequence of φ:A → B, θ:B → C of groups and homomorphisms is exact at B if Im φ = Ker θ. A sequence ⋯ Dn+1 → Dn → ⋯ is exact if it is exact at every group.         A sequence φ:A → B, θ:B → 0 is exact if and only if φ is onto.    A sequence φ:0 → B, θ:B → C is exact if and only if θ is one-to-one.    If A → B → C → D → E is an exact sequence with homomorphisms φ:A → B and ψ:D → E satisfying Im φ = B and Ker ψ = 0, then C = 0.        MV = Mayer-Vietoris Theorem   Suppose that X is a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). Then there is an exact sequence ⋯ → Hn(A ∩ B) → Hn(A) ⊕ Hn(B) → Hn(X) → Hn-1(A ∩ B) → ⋯ → H0(X) → 0, such that each homorphism φn: Hn(A ∩ B) → Hn(A) ⊕ Hn(B) is given by φn := (iAB n∗,-iBA n∗) and each homomorphism ψn: Hn(A) ⊕ Hn(B) → Hn(X) is given by ψn := jA n∗ + jB n∗, where iAB: A ∩ B → A, iBA: A ∩ B → B, jA: A → X, and jB: B → X are inclusion maps.     Examples     Hi(Sn) ≅ ℤ for i = 0,n, and Hi(Sn) = 0 for all i ≠ 0,n.    Yet another excursion into homological algebra    A short exact sequence of chain complexes is a sequence 0• → A• → B• → C• → 0• of chain complexes and chain maps such that for all n ≥ 0 the sequence 0 → An → Bn → Cn → 0 of groups and homomorphisms is exact.    Zig-zag Lemma   If 0• → A•, i♯:A• → B•, j♯:B• → C•, C• → 0 is a short exact sequence of chain complexes, then there is a (long) exact sequence ⋯ Hn(A) → Hn(B) → Hn(C) → Hn-1(A) → ⋯, with homomorphisms in∗:Hn(A) → Hn(B) and jn∗:Hn(B) → Hn(C).     Proof of the MV Theorem    Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). The chain complex C•(A+B) is defined by: Cn(A+B) := {∑ mσσ + ∑ kττ | each σ,τ is a singular n-simplex of X, each σ(Δn) ⊆ A and τ(Δn) ⊆ B, and each mσ, kτ ∈ ℤ} and ∂nA+B := ∂nX|Cn(A+B)Cn-1(A+B).      Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). The sequence 0• → C•(A ∩ B) → C•(A) ⊕ C•(B) → C•(A+B) → 0•, with homomorphisms φ̃n: Cn(A ∩ B) → Cn(A) ⊕ Cn(B) given by φ̃n := (iAB n♯,-iBA n♯) and ψ̃n: Cn(A) ⊕ Cn(B) → Cn(A+B) given by ψ̃n := jA n♯ + jB n♯, is exact.    Small Chains Theorem   Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). Then Hn(X) ≅ Hn(A+B) for all n.      "
},
{
  "id": "def-7.50",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.50",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  Let X be a topological space. A singular n-simplex of X is a continuous function σ:Δn → X.   "
},
{
  "id": "def-7.51",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.51",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": "  Let X be a topological space and let n ≥ 0. Let Sn be the set of singular n-simplices of X. The group of singular n-chains of X is Cnsing(X) = Cn(X) := ⊕singular n-simplices σ ℤ = ⊕singular n-simplices σ ℤσ. An element of Cnsing(X) is called a (singular) n-chain, and written ∑singular n-simplices σ mσσ, where each mσ ∈ ℤ and all but finitely many mσ's are 0.   "
},
{
  "id": "def-7.52",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.52",
  "type": "Definition",
  "number": "7.2.3",
  "title": "",
  "body": "  Let X be a topological space and let n ≥ 1. The n-th singular boundary map is the group homomorphism ∂nsing = ∂nX = ∂n: Cnsing(X) → Cn-1sing(X) defined by ∂n(∑singular n-simplices σ mσσ) := ∑singular n-simplices σ mσ∂n(1σ) and ∂n(1σ) := ∑i=0n (-1)i σ ∘ Fi(n). The 0-th singular boundary map is the group homomorphism ∂0sing = ∂0: C0sing(X) → 0.   "
},
{
  "id": "lem-7.55",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.55",
  "type": "Lemma",
  "number": "7.2.4",
  "title": "",
  "body": "  If X is a topological space and n ≥ 1, then Im ∂n+1sing ⊆ Ker ∂nsing.   "
},
{
  "id": "def-7.56",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.56",
  "type": "Definition",
  "number": "7.2.5",
  "title": "",
  "body": "  Let X be a topological space and let n ≥ 0. The n-th singular homology group of X is the group Hnsing(X) = Hn(X) := Ker ∂nsing \/ Im ∂n+1sing.   "
},
{
  "id": "example-41",
  "level": "2",
  "url": "sec-sing-hom.html#example-41",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-7.58",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.58",
  "type": "Proposition",
  "number": "7.2.7",
  "title": "",
  "body": "  If X is a space with exactly one point, then H0(X) = ℤ and Hn = 0 for all n ≥ 1.   "
},
{
  "id": "thm-7.60",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.60",
  "type": "Theorem",
  "number": "7.2.8",
  "title": "",
  "body": "  If a space X has path components Xα, then Hnsing(X) = ⊕α Hnsing(Xα) for all n ≥ 0.   "
},
{
  "id": "thm-7.62",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.62",
  "type": "Theorem",
  "number": "7.2.9",
  "title": "",
  "body": "  If X is a path-connected space, then H0sing(X) ≅ ℤ.   "
},
{
  "id": "def-7.70",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.70",
  "type": "Definition",
  "number": "7.2.10",
  "title": "",
  "body": "  A chain complex, denoted C•, is a sequence ⋯ → Cn+1 → Cn → Cn-1 → ⋯ C0 → 0 with group homomorphisms ∂nC = ∂n: Cn → Cn-1 and ∂0C = ∂0: C0 → 0 satisfying Im ∂n+1 ⊆ Ker ∂n for all n. An element of Ker ∂n is called an n-cycle and an element of Im ∂n+1 is an n-boundary. For n ≥ 0, the n-th homology group of C• is Hn(C•) := Ker ∂nC \/ Im ∂n+1C.   "
},
{
  "id": "def-7.72",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.72",
  "type": "Definition",
  "number": "7.2.11",
  "title": "",
  "body": "  A chain map from a chain complex C• to a chain complex D•, written f♯:C• → D•, is a collection of group homomorphisms fn♯: Cn → Dn for all n ≥ 0 satisfying ∂nD ∘ fn♯ = fn-1♯ ∘ ∂nC for all n.   "
},
{
  "id": "def-7.73",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.73",
  "type": "Definition",
  "number": "7.2.12",
  "title": "",
  "body": "  Let f♯:C• → D• be a chain map. The n-th homology homomorphism induced by f♯ is the function fn∗: Hn(C•) → Hn(D•) defined by fn∗(γ + Im ∂n+1C) := fn♯(γ) + Im ∂n+1D.   "
},
{
  "id": "lem-7.74",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.74",
  "type": "Lemma",
  "number": "7.2.13",
  "title": "",
  "body": "  If f♯:C• → D• is a chain map, then the n-th homology homomorphism fn∗ induced by f♯ is a well-defined group homomorphism.   "
},
{
  "id": "def-7.77",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.77",
  "type": "Definition",
  "number": "7.2.14",
  "title": "",
  "body": "  Two chain maps f♯,g♯: C• → D• are chain homotopic, written f♯ ≃ g♯, if there is a collection of group homomorphisms hn: Cn → Dn+1 satisfying gn - fn = ∂n+1D ∘ hn + hn-1 ∘ ∂nC for all n. The collection of functions {hn} is called a chain homotopy from f♯ to g♯.   "
},
{
  "id": "prop-7.78",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.78",
  "type": "Proposition",
  "number": "7.2.15",
  "title": "",
  "body": "  If f♯,g♯: C• → D• are chain homotopic chain maps, then fn∗ = gn∗ for all n.   "
},
{
  "id": "def-7.80",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.80",
  "type": "Definition",
  "number": "7.2.16",
  "title": "",
  "body": "  A chain map f♯: C• → D• is a chain homotopy equivalence if there is a chain map g♯: D• → C• such that f♯ ∘ g♯ ≃ 1D• and g♯ ∘ f♯ ≃ 1C•.   "
},
{
  "id": "prop-7.82",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.82",
  "type": "Proposition",
  "number": "7.2.17",
  "title": "",
  "body": "  If f♯: C• → D• is a chain homotopy equivalence, then fn∗: Hn(C•) → Hn(D•) is an isomorphism for all n.   "
},
{
  "id": "thm-7.90",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.90",
  "type": "Theorem",
  "number": "7.2.18",
  "title": "",
  "body": "  If X is a Δ-complex, then HnΔ(X) ≅ Hnsing(X) for all n ≥ 0.   "
},
{
  "id": "cor-7.91",
  "level": "2",
  "url": "sec-sing-hom.html#cor-7.91",
  "type": "Corollary",
  "number": "7.2.19",
  "title": "",
  "body": "  If X is a topological space with two Δ-complex structures X' and X'', then HnΔ(X') ≅ HnΔ(X'') for all n ≥ 0.   "
},
{
  "id": "def-7.95",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.95",
  "type": "Definition",
  "number": "7.2.20",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f:X → Y be a continuous function, and let n ≥ 0. The n-th homology homomorphism induced by f is the homology homomorphism fn∗: Hn(X) → Hn(Y) induced by the (induced) chain map f♯: C•sing(X) → C•sing(Y) defined by fn♯(∑singular n-simplices σ of X mσσ) := ∑singular n-simplices σ of X mσ f ∘ σ.   "
},
{
  "id": "lem-7.96",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.96",
  "type": "Lemma",
  "number": "7.2.21",
  "title": "",
  "body": "  If X and Y are topological spaces and f:X → Y is a continuous function, then the induced chain map f♯ is a well-defined chain map and hence the induced homology homomorphisms are well-defined homomorphisms.   "
},
{
  "id": "prop-7.97",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.97",
  "type": "Proposition",
  "number": "7.2.22",
  "title": "",
  "body": "     If f: X → Y and g: Y → Z are continuous then (g ∘ f)n∗ = gn∗ ∘ fn∗ for all n.    (1X)n∗ = 1Hn(X) for all n.    If f and g are homotopic maps, then fn∗ = gn∗ for all n.      "
},
{
  "id": "thm-7.99",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.99",
  "type": "Theorem",
  "number": "7.2.23",
  "title": "",
  "body": "  If X and Y are homotopy equivalent spaces (that is, X ≃ Y), then Hn(X) ≅ Hn(Y) for all n.   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-sing-hom.html#example-42",
  "type": "Example",
  "number": "7.2.24",
  "title": "",
  "body": " Examples  "
},
{
  "id": "cor-7.100",
  "level": "2",
  "url": "sec-sing-hom.html#cor-7.100",
  "type": "Corollary",
  "number": "7.2.25",
  "title": "",
  "body": "  If X is a contractible space, then H0(X) ≅ ℤ and Hn(X) = 0 for all n ≥ 1.   "
},
{
  "id": "def-7.105",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.105",
  "type": "Definition",
  "number": "7.2.26",
  "title": "",
  "body": "  A sequence of φ:A → B, θ:B → C of groups and homomorphisms is exact at B if Im φ = Ker θ. A sequence ⋯ Dn+1 → Dn → ⋯ is exact if it is exact at every group.   "
},
{
  "id": "lem-7.106",
  "level": "2",
  "url": "sec-sing-hom.html#lem-7.106",
  "type": "Lemma",
  "number": "7.2.27",
  "title": "",
  "body": "     A sequence φ:A → B, θ:B → 0 is exact if and only if φ is onto.    A sequence φ:0 → B, θ:B → C is exact if and only if θ is one-to-one.    If A → B → C → D → E is an exact sequence with homomorphisms φ:A → B and ψ:D → E satisfying Im φ = B and Ker ψ = 0, then C = 0.      "
},
{
  "id": "thm-7.111",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.111",
  "type": "Theorem",
  "number": "7.2.28",
  "title": "MV = Mayer-Vietoris Theorem.",
  "body": "MV = Mayer-Vietoris Theorem   Suppose that X is a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). Then there is an exact sequence ⋯ → Hn(A ∩ B) → Hn(A) ⊕ Hn(B) → Hn(X) → Hn-1(A ∩ B) → ⋯ → H0(X) → 0, such that each homorphism φn: Hn(A ∩ B) → Hn(A) ⊕ Hn(B) is given by φn := (iAB n∗,-iBA n∗) and each homomorphism ψn: Hn(A) ⊕ Hn(B) → Hn(X) is given by ψn := jA n∗ + jB n∗, where iAB: A ∩ B → A, iBA: A ∩ B → B, jA: A → X, and jB: B → X are inclusion maps.   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-sing-hom.html#example-43",
  "type": "Example",
  "number": "7.2.29",
  "title": "",
  "body": " Examples  "
},
{
  "id": "prop-7.115",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.115",
  "type": "Proposition",
  "number": "7.2.30",
  "title": "",
  "body": "  Hi(Sn) ≅ ℤ for i = 0,n, and Hi(Sn) = 0 for all i ≠ 0,n.   "
},
{
  "id": "def-7.120",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.120",
  "type": "Definition",
  "number": "7.2.31",
  "title": "",
  "body": "  A short exact sequence of chain complexes is a sequence 0• → A• → B• → C• → 0• of chain complexes and chain maps such that for all n ≥ 0 the sequence 0 → An → Bn → Cn → 0 of groups and homomorphisms is exact.   "
},
{
  "id": "thm-7.122",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.122",
  "type": "Theorem",
  "number": "7.2.32",
  "title": "Zig-zag Lemma.",
  "body": "Zig-zag Lemma   If 0• → A•, i♯:A• → B•, j♯:B• → C•, C• → 0 is a short exact sequence of chain complexes, then there is a (long) exact sequence ⋯ Hn(A) → Hn(B) → Hn(C) → Hn-1(A) → ⋯, with homomorphisms in∗:Hn(A) → Hn(B) and jn∗:Hn(B) → Hn(C).   "
},
{
  "id": "def-7.125",
  "level": "2",
  "url": "sec-sing-hom.html#def-7.125",
  "type": "Definition",
  "number": "7.2.33",
  "title": "",
  "body": "  Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). The chain complex C•(A+B) is defined by: Cn(A+B) := {∑ mσσ + ∑ kττ | each σ,τ is a singular n-simplex of X, each σ(Δn) ⊆ A and τ(Δn) ⊆ B, and each mσ, kτ ∈ ℤ} and ∂nA+B := ∂nX|Cn(A+B)Cn-1(A+B).   "
},
{
  "id": "prop-7.127",
  "level": "2",
  "url": "sec-sing-hom.html#prop-7.127",
  "type": "Proposition",
  "number": "7.2.34",
  "title": "",
  "body": "  Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). The sequence 0• → C•(A ∩ B) → C•(A) ⊕ C•(B) → C•(A+B) → 0•, with homomorphisms φ̃n: Cn(A ∩ B) → Cn(A) ⊕ Cn(B) given by φ̃n := (iAB n♯,-iBA n♯) and ψ̃n: Cn(A) ⊕ Cn(B) → Cn(A+B) given by ψ̃n := jA n♯ + jB n♯, is exact.   "
},
{
  "id": "thm-7.130",
  "level": "2",
  "url": "sec-sing-hom.html#thm-7.130",
  "type": "Theorem",
  "number": "7.2.35",
  "title": "Small Chains Theorem.",
  "body": "Small Chains Theorem   Let X be a topological space with subspaces A,B such that X = Int(A) ∪ Int(B). Then Hn(X) ≅ Hn(A+B) for all n.   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
