window.BENCHMARK_DATA = {
  "lastUpdate": 1645317801597,
  "repoUrl": "https://github.com/vercel/turborepo",
  "entries": {
    "macOS Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greg.soltis@vercel.com",
            "name": "Greg Soltis",
            "username": "gsoltis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d",
          "message": "Large Monorepo Benchmark (#740)\n\nRuns a set of benchmarks against a large monorepo example. \n\nBenchmarks include:\n * A clean, zero-state build* of the monorepo\n * Building the unchanged monorepo with a full cache\n * Building the monorepo with a source code edit on top of a previously-built cache\n * Building the monorepo with a dependency graph edit on top of a previously-build cache\n\n*: Note that we only do this once, and with `concurrency` set to `1`. A full concurrent build currently OOMs",
          "timestamp": "2022-02-15T22:29:29Z",
          "tree_id": "339dab36b2fdf6d11d1e9c4d4681e9ab5d927612",
          "url": "https://github.com/vercel/turborepo/commit/4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d"
        },
        "date": 1644966290238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 252203.4,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 12626.2,
            "unit": "ms",
            "range": "1456"
          },
          {
            "name": "Cached Build - source code change",
            "value": 50767.2,
            "unit": "ms",
            "range": "13043"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 51574.8,
            "unit": "ms",
            "range": "13481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3476570+ivoilic@users.noreply.github.com",
            "name": "Ivo Ilić",
            "username": "ivoilic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eccacc9dc0f239b278a204ba1344fe9077015114",
          "message": "Don't run build & test on changes to the docs (#737)\n\nCo-authored-by: Jared Palmer <jared@jaredpalmer.com>",
          "timestamp": "2022-02-16T10:57:20-05:00",
          "tree_id": "cfec4cb244bd97f0ae6a1a1fb09a125c0a89d356",
          "url": "https://github.com/vercel/turborepo/commit/eccacc9dc0f239b278a204ba1344fe9077015114"
        },
        "date": 1645029298163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 247829.8,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 14253.8,
            "unit": "ms",
            "range": "5630"
          },
          {
            "name": "Cached Build - source code change",
            "value": 56405.2,
            "unit": "ms",
            "range": "29606"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 52535.2,
            "unit": "ms",
            "range": "8607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "committer": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "distinct": true,
          "id": "1251457dddaf977a45ed56fffc1b35feee2f7b41",
          "message": "Fix alt tag",
          "timestamp": "2022-02-16T11:47:53-05:00",
          "tree_id": "5c5dd46c1d70b401124cfd824c800e921ca2ebfa",
          "url": "https://github.com/vercel/turborepo/commit/1251457dddaf977a45ed56fffc1b35feee2f7b41"
        },
        "date": 1645032111043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 232900.2,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 11743.4,
            "unit": "ms",
            "range": "1409"
          },
          {
            "name": "Cached Build - source code change",
            "value": 52258,
            "unit": "ms",
            "range": "11593"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 53132.2,
            "unit": "ms",
            "range": "8870"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "committer": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "distinct": true,
          "id": "dca8f9fb4d916d48724fb6d3f85380bd3cf0b664",
          "message": "Update showcase",
          "timestamp": "2022-02-16T11:47:33-05:00",
          "tree_id": "d39610e8996a6fc3a1930735d9f90a85493d2106",
          "url": "https://github.com/vercel/turborepo/commit/dca8f9fb4d916d48724fb6d3f85380bd3cf0b664"
        },
        "date": 1645032268007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 266621,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 13563.4,
            "unit": "ms",
            "range": "2685"
          },
          {
            "name": "Cached Build - source code change",
            "value": 53755.8,
            "unit": "ms",
            "range": "15501"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 51623.4,
            "unit": "ms",
            "range": "11751"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Greg Soltis",
            "username": "gsoltis",
            "email": "greg.soltis@vercel.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "09223bf43e4f3668bfd4f9b8a9599c836fbd6692",
          "message": "Start splitting the Run command up (#752)\n\nThis PR makes a few changes to `Run`. The intention is to separate out a few distinct pieces:\n * The complete graph, inferred from the the filesystem and pipeline configuration. This should be reusable across multiple runs on the same filesystem / pipeline\n * Run specific configuration: what tasks to run, whether to include dependencies, etc.\n * The mechanics of how to execute the run. In parallel? Cache the output? etc.\n\nReview note: it may be easier to go commit by commit.",
          "timestamp": "2022-02-17T17:34:44Z",
          "url": "https://github.com/vercel/turborepo/commit/09223bf43e4f3668bfd4f9b8a9599c836fbd6692"
        },
        "date": 1645145153332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 244807.4,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 15653.8,
            "unit": "ms",
            "range": "3289"
          },
          {
            "name": "Cached Build - source code change",
            "value": 75407.4,
            "unit": "ms",
            "range": "38295"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 58223.6,
            "unit": "ms",
            "range": "14269"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Weyert de Boer",
            "username": "weyert",
            "email": "weyert@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4b28b180dda7f6646b5d603ef5c5f534a82219ca",
          "message": "feat: add support for JSON with comments `turbo.json` file (#745)\n\nAllow the `turbo.json` file to contain comments\n\nMakes it easier to explain the pipeline when they are quite large :)\nSo that future @weyert and his colleagues know what's going on!\n\nFixes #644\n\nCo-authored-by: tapico-weyert <70971917+tapico-weyert@users.noreply.github.com>",
          "timestamp": "2022-02-18T20:49:13Z",
          "url": "https://github.com/vercel/turborepo/commit/4b28b180dda7f6646b5d603ef5c5f534a82219ca"
        },
        "date": 1645231343391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 200680.8,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 14898.4,
            "unit": "ms",
            "range": "5884"
          },
          {
            "name": "Cached Build - source code change",
            "value": 49965.2,
            "unit": "ms",
            "range": "7072"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 47930.8,
            "unit": "ms",
            "range": "10826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shu Ding",
            "username": "shuding",
            "email": "g@shud.in"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9ee851eadeb8531bcd8cd6c5706d7520a91c0e2f",
          "message": "Upgrade Nextra (#760)",
          "timestamp": "2022-02-19T20:27:34Z",
          "url": "https://github.com/vercel/turborepo/commit/9ee851eadeb8531bcd8cd6c5706d7520a91c0e2f"
        },
        "date": 1645317800616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 217077.2,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 12062.2,
            "unit": "ms",
            "range": "1444"
          },
          {
            "name": "Cached Build - source code change",
            "value": 48631.6,
            "unit": "ms",
            "range": "7015"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 49318.4,
            "unit": "ms",
            "range": "9092"
          }
        ]
      }
    ]
  }
}